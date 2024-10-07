import { ViewModelDefinition } from "@headless/types";
import { transform } from "../view/compiler";

/**
 * Create render function content from view model definition and parsed view as HTMLElement
 * 
 * @param viewDef view model definition
 * @param node parsed view as HTMLElement
 * @returns structure with args and contents as array of strings
 */
export const generateRenderFnContent = (
  viewDef: ViewModelDefinition,
  node: HTMLElement
): {
  args: string[];
  contents: string[];
} => {
  const viewDepDefs = (viewDef.imports || []) as string[];

  const viewCompileResult = transform(node, {
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
