import {
  Data,
  RenderFn,
  Component,
  DefineComponentFn,
  ComponentDefinition,
  ViewModelDefinition,
  ConditionFn,
} from '@headless/types';
import { parseView } from '@headless/utils';
import { createActionFn } from './actions';
import { getViewDeps } from './views';
import { createRenderFn } from '@headless/transform';

let defineComponent: DefineComponentFn = () => {
  throw new Error('defineComponent is not implemented');
};

export function registerDefineComponent(fn: DefineComponentFn) {
  defineComponent = fn;
}

export { defineComponent };

////////

/**
 * Create component definition from view model definition
 * 
 * @param ViewModelDefinition view model definition
 * @param viewDeps resolved view dependencies
 * @returns component definition
 */
export const createComponentDefinition = (
  {
    name,
    data,
    actions,
    lifecycleHooks,
    onEvent,
    styles,
    imports,
  }: ViewModelDefinition,
  viewDeps = {} as Record<string, Component>
): ComponentDefinition => {
  const actionFnMap = Object.entries(actions || {}).reduce(
    (prev, [name, actionDef]) => {
      return {
        ...prev,
        [name]: createActionFn(actionDef as unknown as Data),
      };
    },
    {}
  );

  const lifecycleHookFnMap = Object.entries(lifecycleHooks || {}).reduce(
    (prev, [name, actionName]) => {
      return {
        ...prev,
        [name]: actionFnMap[actionName],
      };
    },
    {}
  );

  const subscriptionDefinitions = (onEvent || []).map(({ eventId, action, condition }) => ({
    eventId,
    action: actionFnMap[action],
    condition: new Function('data', 'props', 'eventData', `return ${condition}`) as ConditionFn,
  }));

  const unresolvedImports = (imports || []).filter((name) => !viewDeps[name]);

  return {
    name,
    data,
    actions: actionFnMap,
    lifecycleHooks: lifecycleHookFnMap,
    onEvent: subscriptionDefinitions,
    styles,
    ...(unresolvedImports.length > 0 && { imports: unresolvedImports }),
  };
};

/**
 * defineComponent API for view model + render function (used by build process)
 *
 * @param componentDef component definition
 * @param viewDeps view dependencies
 * @returns component
 */
export const defineComponentDecl = (
  viewDef: ViewModelDefinition,
  render: RenderFn,
  viewDeps = {} as Record<string, Component>
) => {
  const componentDef = createComponentDefinition(viewDef, viewDeps);

  return defineComponent({ ...componentDef, render }, viewDeps);
};




/**
 * defineComponent API for view model definition and view html, without dynamic deps (used for testing purpose)
 * 
 * @param viewDef view model definition
 * @returns component
 */
export const defineComponentDeclViewSync = (viewDef: ViewModelDefinition, components = {} as Record<string,Component>) => {
  // create render function
  const renderFn = createRenderFn(viewDef, parseView(viewDef.view || '')) as RenderFn;

  // define component
  return defineComponentDecl(viewDef, renderFn, components);
};


/**
 * defineComponent API for view model definition and view html (used by runtime)
 * 
 * @param viewDef view model definition
 * @returns component
 */
export const defineComponentDeclView = async (viewDef: ViewModelDefinition) => {
  // view deps
  const components = await getViewDeps(viewDef.imports || []);

  // define component
  return defineComponentDeclViewSync(viewDef, components);
};


