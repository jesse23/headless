import {
  Data,
  cloneJson,
  getValue,
  UseStoreFn,
  ViewModelDefinition,
  applyValues,
  subscribeEvents,
  unsubscribeEvents,
  initActionsFromActionFn,
  createActionFromActionFn,
  ComponentDefinition,
  applyValue,
  createComponentDefinition,
  Component,
  UsePartialStoreFn,
  getViewDeps,
  registerDefineComponent,
} from '@headless/core';
import { useRef, useEffect, useState, createElement } from 'react';


/**
 * Async init hook
 *
 * @param initFn init function.
 * @returns value
 */
const useAsyncInit = <T>(initFn: () => Promise<T>) => {
  const [data, setData] = useState<T>();
  useEffect(() => {
    initFn().then(setData);
    // NOTE: we don't need to re-run this effect
  }, []);
  return data;
};

const useStore: UseStoreFn = (initFn) => {
  const lastState = useRef(initFn());

  const getData = useRef(() => lastState.current).current;

  const [_, setData] = useState(getData());

  const updateData = useRef((values: Data): void => {
    setData((lastState.current = applyValues(getData(), values)));
  }).current;

  return { getData, updateData };
};

const usePartialStore: UsePartialStoreFn = (store, path) => {
  const { getData: getStoreData, updateData: updateStoreData } = store;

  const getData = useRef(() => getValue(getStoreData(), path) as Data).current;
  const updateData = useRef((values: Data): void => {
    const updatedValues = Object.entries(values).reduce(
      (prev, [path, value]) => {
        const prevValue = getValue(prev, path);
        return prevValue === value ? prev : applyValue(path, value, prev);
      },
      getData()
    );
    updateStoreData({ [path]: updatedValues });
  }).current;

  return { getData, updateData };
};

const useComponentDefinition = (
  componentDef: ComponentDefinition,
  props: Record<string, unknown>
) => {
  // props
  const propsRef = useRef({} as Record<string, unknown>);
  const getProps = useRef(() => propsRef.current).current;
  propsRef.current = props;

  // data
  const { getData, updateData } = useStore(() => cloneJson(componentDef.data));

  // actions
  const actions = useRef(
    initActionsFromActionFn(
      componentDef.actions,
      { getData, updateData },
      getProps
    )
  ).current;

  // lifecycle hooks and event
  useEffect(() => {
    // onMount hook
    const actionFn = componentDef.lifecycleHooks?.onMount;
    if (actionFn) {
      // TODO: need await here
      createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
    }

    const subscriptions = subscribeEvents(
      { onEvent: componentDef.onEvent } as ViewModelDefinition,
      actions
    );

    return () => {
      unsubscribeEvents(subscriptions);

      const actionFn = componentDef.lifecycleHooks?.onUnmount;
      if (actionFn) {
        createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
      }
    };
    // action hook is stable since it is with useStore
  }, [actions, getData, getProps, updateData]);

  // onUpdate
  useEffect(() => {
    const actionFn = componentDef.lifecycleHooks?.onUpdate;
    if (actionFn) {
      createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
    }
  });

  return {
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
): Component => {
  const { imports, styles, render } = componentDef;

  const Component = (props: Record<string, unknown>) => {
    const { getData, updateData, actions } = useComponentDefinition(
      componentDef,
      props
    );

    const components = imports
      ? useAsyncInit(async () => ({
          ...viewDeps,
          ...(await getViewDeps(imports || [])),
        })) || {}
      : viewDeps;

    return render({
      props,
      data: getData(),
      actions,
      components,
      styles,
      functions: { createElement, usePartialStore, getData, updateData },
    });
  };
  Component.displayName = componentDef.name || 'anonymous';
  return Component;
};

registerDefineComponent(defineComponent);


///////////////////////////////
/**
 * Hooks to use view model, for review purpose
 * 
 * @param viewDef view model definition without html and render function
 * @param props input properties
 * @returns required context for render function
 */
export const useViewModel = (
  viewDef: ViewModelDefinition,
  props: Record<string, unknown>
) => {
  const componentDef = useRef(createComponentDefinition(viewDef)).current;
  return useComponentDefinition(componentDef, props);
};