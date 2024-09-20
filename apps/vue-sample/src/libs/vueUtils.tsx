import { ref, onMounted, onUnmounted, onUpdated } from 'vue';
import {
  Data,
  cloneJson,
  createActionFn,
  UseStoreFn,
  ViewModelDefinition,
  getValue,
} from '@headless/core';
import lodashFpSet from 'lodash/fp/set';
import { eventBus, Subscription } from '@headless/ops';

export const useStore: UseStoreFn = (initFn) => {
  const lastState = ref(initFn());
  const getData = () => lastState.value;
  const updateData = (values: Data): void => {
    lastState.value = Object.entries(values).reduce(
      (prev, [path, value]): Data => {
        const prevValue = getValue(prev, path);
        return prevValue === value ? prev : lodashFpSet(path, value, prev);
      },
      getData()
    );
  };

  return { getData, updateData };
};

export const useViewModel = (
  viewDef: ViewModelDefinition,
  props: Record<string, unknown>
) => {
  // props
  const propsRef = ref(props);
  propsRef.value = props;
  const getProps = () => propsRef.value;

  // data
  const data = useStore(() => cloneJson(viewDef.data));
  const { getData, updateData } = data;

  // actions
  const actions = ref(
    Object.entries(viewDef.actions || {}).reduce(
      (prev, [actionName, actionDef]) => {
        return {
          ...prev,
          [actionName]: createActionFn(
            actionDef as Data,
            {
              getData,
              updateData,
            },
            getProps
          ),
        };
      },
      {} as Record<string, (eventData?: any) => void>
    )
  );

  // events
  const subscriptions = ref([] as (Subscription<unknown> | undefined)[]);

  onMounted(() => {
    // onEvent
    subscriptions.value = (viewDef.onEvent || []).map((eventListener) => {
      const { eventId, action } = eventListener;
      const actionFn = actions.value[action];
      if (!actionFn) {
        console.warn(`action ${action} not found in actions`);
        return;
      }
      return eventBus.subscribe({
        topic: eventId,
        handler: (eventData: Data) => {
          actionFn(eventData);
        },
      });
    });

    // onMount hook
    if (Object.keys(actions).length === 0) return;
    const onMountFnName = viewDef.lifecycleHooks?.onMount;
    if (onMountFnName) {
      const onMountFn = actions.value[onMountFnName];
      onMountFn();
    }
  });

  onUnmounted(() => {
    // unsubscribe
    subscriptions.value.forEach((sub) => {
      if (sub) {
        eventBus.unsubscribe(sub);
      }
    });

    // onUnmount
    const onUnmountFnName = viewDef.lifecycleHooks?.onUnmount;
    if (onUnmountFnName) {
      const onUnmountFn = actions.value[onUnmountFnName];
      onUnmountFn();
    }
  });

  onUpdated(() => {
    // onUpdate
    const onUpdateFnName = viewDef.lifecycleHooks?.onUpdate || '';
    const onUpdateFn = actions.value[onUpdateFnName];
    if (onUpdateFn) {
      onUpdateFn();
    }
  });

  return { getData, updateData, actions: actions.value, data: getData() };
};
