import { createActionFn } from './actions';
import { createCompiler } from '@headless/compiler';
import {
  Component,
  ComponentDefinition,
  Data,
  DefineComponentFn,
  RenderFn,
  ViewModelDefinition,
} from './types';
import { getViewDeps } from './views';
import { parseView } from './utils';

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
        [name]: createActionFn(actionDef as Data),
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

  const unresolvedImports = (imports || []).filter((name) => !viewDeps[name]);

  return {
    name,
    data,
    actions: actionFnMap,
    lifecycleHooks: lifecycleHookFnMap,
    onEvent,
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
 * Create render function content from view model definition and parsed view as HTMLElement
 * 
 * @param viewDef view model definition
 * @param node parsed view as HTMLElement
 * @returns structure with args and contents as array of strings
 */
const generateRenderFnContent = (
  viewDef: ViewModelDefinition,
  node: HTMLElement
): {
  args: string[];
  contents: string[];
} => {
  const viewDepDefs = (viewDef.imports || []) as string[];

  const compiler = createCompiler();
  const viewCompileResult = compiler.compile(node, {
    index: 0,
    level: 0,
    deps: viewDepDefs.reduce((prev, name) => ({ ...prev, [name]: {} }), {}),
  });

  return {
    args: ['param'],
    contents: [
      `const { props, actions, styles, functions: { createElement, getPartialStore, getData, updateData }, components: { ${viewDepDefs.join(
        ', '
      )}} } = param;`,
      `  let data = { getData, updateData };`,
      ...Object.keys(viewCompileResult.partialStore).map((fullPath) => {
        const varName = fullPath.replace(/\./g, '_');
        let store,
          path = '';
        const paths = fullPath.split('.');
        if (fullPath.startsWith('props.')) {
          store = `${paths[0]}.${paths[1]}`;
          path = paths.slice(2).join('.');
        } else {
          store = paths[0];
          path = paths.slice(1).join('.');
        }
        if (path) {
          return `  const ${varName} = getPartialStore(${store}, '${path}')`;
        }
        return `  const ${varName} = ${store}`;
      }),
      `  // quickly overwrite`,
      `  data = data.getData();`,
      `  return ${viewCompileResult.contents.join('\n')}`,
    ],
  };
};

/**
 * Create component JS content from view model definition and parsed view as HTMLElement
 * 
 * @param viewDef view model definition
 * @param node parsed view as HTMLElement
 * @returns component JS content as array of strings
 */
export const generateComponentContent = (
  viewDef: ViewModelDefinition,
  node: HTMLElement
): string[] => {
  const { args, contents } = generateRenderFnContent(viewDef, node);

  return [
    `
// view model
const viewDef = ${JSON.stringify(viewDef, null, 2)};

// styles placeholder

// renter function
const renderFn = (${args.join(', ')}) => {
  ${contents.join('\n')}
};

// define component
export const Component = defineComponentDecl(viewDef, renderFn); 
export default Component;
  `.trim(),
  ];
};

/**
 * defineComponent API for view model definition and view html, without dynamic deps (used for testing purpose)
 * 
 * @param viewDef view model definition
 * @returns component
 */
export const defineComponentDeclViewSync = (viewDef: ViewModelDefinition, components = {} as Record<string,Component>) => {
  // create render function
  const { args, contents } = generateRenderFnContent(
    viewDef,
    parseView(viewDef.view || '')
  );
  const renderFn = new Function(...args, contents.join('\n')) as RenderFn;

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

