import { ViewModelDefinition } from '@headless/types';

import compileNode from './transformNode';
import compileText from './transformText';
import compileNgInclude from './transformNgInclude';
import compileExistWhen from './transformExistWhen';
import compileVisibleWhen from './transformVisibleWhen';
import compileNgClass from './transformNgClass';
import compileNgSlot from './transformNgSlot';
import compileNgTransclude from './transformNgTransclude';
import compileTransclude from './transformTransclude';
import compileNgRepeat from './transformNgRepeat';
import compileNgEnter from './transformNgEnter';
import compileNgClick from './transformNgClick';
import compileNgPropModel from './transformNgPropModel';
import CompilerFactory from './transformFactory';

// 20200713 - special test
import compileReactButton from './transformReactButton';

// export for testing purpose
export const createTransformer = () => {
  const transformer = new CompilerFactory();

  // Special Compiler
  // for example when nodeName === 'a' && hasAttr('b') && hasChildren('c')

  // Attribute Compiler
  transformer.add(compileNgRepeat);
  transformer.add(compileExistWhen);
  transformer.add(compileVisibleWhen);
  transformer.add(compileNgClass);
  // TODO: maybe we should put tranclude at the top? not sure at this moment
  transformer.add(compileTransclude);
  transformer.add(compileNgTransclude);
  transformer.add(compileNgSlot);

  // Custom Attribute
  // https://github.com/DBjelovuk/react-attribute-directives
  transformer.add(compileNgEnter);
  // transformer.add( compileInput );
  transformer.add(compileNgPropModel);
  transformer.add(compileNgClick);

  // 20200713 - test for coexist
  transformer.add(compileReactButton);

  // Element Compiler
  transformer.add(compileNgInclude);

  // General Compiler
  transformer.add(compileNode);
  transformer.add(compileText);

  return transformer;
};

export const createRenderFn = (
  viewDef: ViewModelDefinition,
  node: HTMLElement
) => {
  const viewDepDefs = (viewDef.imports || []) as string[];

  const transformer = createTransformer();

  const viewCompileResult = transformer.transform(node, {
    index: 0,
    level: 0,
    deps: viewDepDefs.reduce((prev, name) => ({ ...prev, [name]: {} }), {}),
  });

  return new Function(
    'param',
    [
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
    ].join('\n')
  );
};

export const transform = (
  viewDef: ViewModelDefinition,
  node: HTMLElement
): string[] => {
  return createRenderFn(viewDef, node).toString().split('\n');
};
