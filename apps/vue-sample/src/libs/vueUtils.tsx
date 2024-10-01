import {
  ref,
  onMounted,
  onUnmounted,
  onUpdated,
  defineComponent as defineComponentVue,
  h,
} from 'vue';
import {
  Data,
  cloneJson,
  UseStoreFn,
  ViewModelDefinition,
  applyValues,
  initActions,
  subscribeEvents,
  execLifecycleHook,
  unsubscribeEvents,
  ComponentDefinition,
  initActionsFromActionFn,
  createActionFromActionFn,
  RenderFn,
} from '@headless/core';
import { Subscription } from '@headless/ops';

export const useStore: UseStoreFn = (initFn) => {
  const lastState = ref(initFn());
  const getData = () => lastState.value;
  const updateData = (values: Data): void => {
    lastState.value = applyValues(getData(), values);
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
  const { getData, updateData } = useStore(() => cloneJson(viewDef.data));

  // actions
  const actions = ref(
    initActions(viewDef.actions || {}, { getData, updateData }, getProps)
  ).value;

  // events
  const subscriptions = ref([] as Subscription<unknown>[]);

  onMounted(async () => {
    // onMount hook
    await execLifecycleHook(viewDef, actions, 'onMount');

    // onEvent
    subscriptions.value = subscribeEvents(viewDef, actions);
  });

  onUnmounted(async () => {
    // unsubscribe
    unsubscribeEvents(subscriptions.value);
    subscriptions.value = [];

    // onUnmount
    await execLifecycleHook(viewDef, actions, 'onUnmount');
  });

  // onUpdate
  onUpdated(() => {
    execLifecycleHook(viewDef, actions, 'onUpdate');
  });

  return { getData, updateData, actions, data: getData() };
};

export const defineComponent = (componentDef: ComponentDefinition) => {
  const renderFn = componentDef.render as RenderFn;

  const Component = defineComponentVue({
    setup(props) {
      // props
      const propsRef = ref(props);
      propsRef.value = props;
      const getProps = () => propsRef.value;

      // data
      const { getData, updateData } = useStore(() =>
        cloneJson(componentDef.data)
      );

      // actions
      const actions = ref(
        initActionsFromActionFn(
          componentDef.actions,
          { getData, updateData },
          getProps
        )
      ).value;

      // events
      const subscriptions = ref([] as Subscription<unknown>[]);

      onMounted(async () => {
        // onMount hook
        const actionFn = componentDef.lifecycleHooks?.onMount;
        if (actionFn) {
          // TODO: need await here
          await createActionFromActionFn(
            actionFn,
            { getData, updateData },
            getProps
          )();
        }

        // onEvent
        subscriptions.value = subscribeEvents(
          { onEvent: componentDef.onEvent } as ViewModelDefinition,
          actions
        );
      });

      onUnmounted(async () => {
        // unsubscribe
        unsubscribeEvents(subscriptions.value);
        subscriptions.value = [];

        // onUnmount
        const actionFn = componentDef.lifecycleHooks?.onUnmount;
        if (actionFn) {
          createActionFromActionFn(
            actionFn,
            { getData, updateData },
            getProps
          )();
        }
      });

      // onUpdate
      onUpdated(() => {
        const actionFn = componentDef.lifecycleHooks?.onUpdate;
        if (actionFn) {
          createActionFromActionFn(
            actionFn,
            { getData, updateData },
            getProps
          )();
        }
      });

      return () =>
        renderFn({
          props: getProps(),
          data: getData(),
          actions,
          styles: {},
          components: {},
          functions: { createElement: h, getData, updateData },
        });
    },
  });
  return Component;
};
