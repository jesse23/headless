/**
 * NOTE: Since SolidJS has different approach on reactivity, it will require different compiler for JSX.
 * This is how SolidJS deals with JSX today:
 * - Compile it back to html
 * - For OOTB DOM elements, it will be DOM directly, no virtual DOM
 * - For SolidJS components, it will be compiled to createComponent API and 'insert' into DOM
 * - For reactivity expression, it will be compile to callback instead of expression
 * - The main render function is one time generation, no reactivity. Reactivity is handled by callback
 * 
 * It will required when we write expression, we have to use callback, instead of variable in JSX expression.
 * 
 * If we really want to support generic JSX pattern, we might be ending up to compile {data.count} to {const data = getData(); return data.count}, or {(() => { const data = getData; return data.count; })()}.
 */
import {
  Data,
  UseStoreFn,
  ComponentDefinition,
  ViewModelDefinition,
} from '@headless/types';
import {
  cloneJson,
  applyValues,
} from '@headless/utils';
import {
  initActionsFromActionFn,
  createActionFromActionFn,
  subscribeEvents,
  unsubscribeEvents,
  createComponentDefinition,
} from '@headless/core';
import { createSignal, createEffect, onMount, onCleanup } from 'solid-js';

export const useStore: UseStoreFn = (initFn: () => Data) => {
  const [lastState, setLastState] = createSignal(initFn());
  const getData = lastState;

  const updateData = {
    current: (values: Data): void => {
      setLastState((prevState) => applyValues(prevState, values));
    },
  }.current;

  return { getData, updateData };
};

const useComponentDefinition = (
  componentDef: ComponentDefinition,
  props: Record<string, unknown>
) => {
  const getProps = () => props;

  // data
  const data = useStore(() => cloneJson(componentDef.data));
  const { getData, updateData } = data;

  // actions - no need to use effect since solidJS JSX is callback based
  const actions = initActionsFromActionFn(
    componentDef.actions,
    { getData, updateData },
    getProps
  );

  // lifecycle hooks
  onMount(() => {
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

    onCleanup(() => {
      unsubscribeEvents(subscriptions);

      const actionFn = componentDef.lifecycleHooks?.onUnmount;
      if (actionFn) {
        createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
      }
    });
    // action hook is stable since it is with useStore
  });

  // onUpdate
  createEffect(() => {
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
  const componentDef = createComponentDefinition(viewDef);
  return useComponentDefinition(componentDef, props);
};