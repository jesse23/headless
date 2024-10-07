import {
  Data,
  Component,
  UseStoreFn,
  GetPartialStoreFn,
  ComponentDefinition,
  ViewModelDefinition,
} from '@headless/types';
import {
  cloneJson,
  applyValues,
  createPartialStore,
} from '@headless/utils';
import {
  subscribeEvents,
  unsubscribeEvents,
  initActionsFromActionFn,
  createActionFromActionFn,
  createComponentDefinition,
  registerDefineComponent,
  getViewDeps,
} from '@headless/core';
import {
  ref,
  onMounted,
  onUnmounted,
  onUpdated,
  defineComponent as defineComponentVue,
  h,
  toRaw,
  Slots,
} from 'vue';

export const useStore: UseStoreFn = (initFn) => {
  const lastState = ref(initFn());
  const getData = ref(() => toRaw(lastState.value)).value;
  const updateData = ref((values: Data): void => {
    lastState.value = applyValues(getData(), values);
  }).value;

  return { getData, updateData };
};

const usePartialStore: GetPartialStoreFn = (store, path) => {
  return ref(createPartialStore(store, path)).value;
};

const useAsyncInit = (initFn) => {
  const data = ref({});

  onMounted(async () => {
    const res = await initFn();
    data.value = res;
  });

  return data;
};

const useComponentDefinition = (
  componentDef: ComponentDefinition,
  context: {
    attrs: Record<string, unknown>;
    slots: Slots;
  }
) => {
  // props
  const propsRef = ref(context);
  propsRef.value = context;
  const getProps = () => {
    return {
      ...propsRef.value.attrs,
      children: propsRef.value.slots.default && propsRef.value.slots.default(),
    };
  };

  // data
  const { getData, updateData } = useStore(() => cloneJson(componentDef.data));

  // actions
  const actions = ref(
    initActionsFromActionFn(
      componentDef.actions,
      { getData, updateData },
      getProps
    )
  ).value;

  // events
  const subscriptions = ref([]);

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
      createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
    }
  });

  // onUpdate
  onUpdated(() => {
    const actionFn = componentDef.lifecycleHooks?.onUpdate;
    if (actionFn) {
      createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
    }
  });

  return {
    getProps,
    getData,
    updateData,
    actions,
    data: getData(),
  };
};

/**
 * define component API for JS Component
 *
 * @param componentDef component definition
 * @param viewDeps view dependencies
 * @returns component
 */
export const defineComponent = (
  componentDef: ComponentDefinition,
  viewDeps = {} as Record<string, Component>
) => {
  const { imports, styles, render } = componentDef;

  const Component = defineComponentVue({
    name: componentDef.name || 'anonymous',
    setup(_, context) {
      const { getProps, getData, updateData, actions } = useComponentDefinition(
        componentDef,
        context
      );

      const componentsRef = imports
        ? useAsyncInit(async () => ({
            ...viewDeps,
            ...(await getViewDeps(imports || [])),
          })) || { value: {} }
        : { value: viewDeps };

      return () =>
        render({
          props: getProps(),
          data: getData(),
          actions,
          components: componentsRef.value,
          styles,
          functions: {
            createElement: h,
            getPartialStore: usePartialStore,
            getData,
            updateData,
          },
        });
    },
  }) as unknown as Component;
  return Component;
};

registerDefineComponent(defineComponent);

///////////////////////////
/**
 * Hooks to use view model, for review purpose
 * NOTE: prop is not applicable here since in vue:
 * - props requires predefined.
 * - attrs will cover all props.
 * - children is not in props, but in slots.default()
 *
 * @param viewDef view model definition without html and render function
 * @param props input properties
 * @returns required context for render function
 */
export const useViewModel = (
  viewDef: ViewModelDefinition,
  context: {
    attrs: Record<string, unknown>;
    slots: Slots;
  }
) => {
  const componentDef = ref(createComponentDefinition(viewDef)).value;
  return useComponentDefinition(componentDef, context);
};
