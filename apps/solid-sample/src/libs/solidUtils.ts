import {
  Data,
  cloneJson,
  getValue,
  UseStoreFn,
  ViewModelDefinition,
  initActions,
  applyValue
} from '@headless/core';
import { createSignal, createEffect, onMount, onCleanup } from 'solid-js';
import { eventBus } from '@headless/ops';

export const useStore: UseStoreFn = (initFn: () => Data) => {
  const [lastState, setLastState] = createSignal(initFn());
  const getData = lastState;

  const updateData = {
    current: (values: Data): void => {
      setLastState((prevState) =>
        Object.entries(values).reduce((prev, [path, value]): Data => {
          const prevValue = getValue(prev, path);
          return prevValue === value ? prev : applyValue(path, value, prev);
        }, prevState)
      );
    },
  }.current;

  return { getData, updateData };
};

export const useViewModel = (
  viewDef: ViewModelDefinition,
  props: Record<string, unknown>
) => {
  // props
  // - use it as a ref hook since we don't want to listen to props change
  //   - for UI driven action, it will always be the latest value
  //   - for Model driven action, it may not be the latest if the UI rendering is delayed.
  const propsRef = { current: {} as Record<string, unknown> };
  propsRef.current = props;
  const getProps = () => props;

  // data
  const data = useStore(() => cloneJson(viewDef.data));
  const { getData, updateData } = data;

  // actions - not able to use use effect for now since JSX in solidJS is different with vue/react
  const actions = { current: initActions(viewDef.actions || {}, { getData, updateData }, getProps) }.current;

  // lifecycle hooks
  onMount(() => {
    if (Object.keys(actions).length === 0) return;
    const onMountFnName = viewDef.lifecycleHooks?.onMount;
    if (onMountFnName) {
      const onMountFn = actions[onMountFnName];
      onMountFn();
    }
    onCleanup(() => {
      const onUnmountFnName = viewDef.lifecycleHooks?.onUnmount;
      if (onUnmountFnName) {
        const onUnmountFn = actions[onUnmountFnName];
        onUnmountFn();
      }
    });
    // action hook is stable since it is with useStore
  });

  // onUpdate
  createEffect(() => {
    const onUpdateFnName = viewDef.lifecycleHooks?.onUpdate || '';
    const onUpdateFn = actions[onUpdateFnName];
    if (onUpdateFn) {
      onUpdateFn();
    }
  });

  // onEvent
  onMount(() => {
    const eventSubscriptionDefinitions = viewDef.onEvent || [];
    const subs = eventSubscriptionDefinitions.map((eventListener) => {
      const { eventId, action } = eventListener;
      const actionFn = actions[action];
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
    onCleanup( () => {
      subs.forEach((sub) => {
        if (sub) {
          eventBus.unsubscribe(sub);
        }
      });
    });
  });

  return {
    getData,
    updateData,
    actions,
    // this is wrong since the hook is not going to be called every time in solidJS
    data: getData(), 
  };
};
