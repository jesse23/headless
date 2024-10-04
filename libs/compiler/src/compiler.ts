import compileNode from './libs/compileNode';
import compileText from './compileText';
import compileNgInclude from './libs/compileNgInclude';
import compileExistWhen from './libs/compileExistWhen';
import compileVisibleWhen from './compileVisibleWhen';
import compileNgClass from './libs/compileNgClass';
import compileNgSlot from './libs/compileNgSlot';
import compileNgTransclude from './libs/compileNgTransclude';
import compileTransclude from './compileTransclude';
import compileNgRepeat from './libs/compileNgRepeat';
import compileNgEnter from './libs/compileNgEnter';
import compileNgClick from './libs/compileNgClick';
import compileNgPropModel from './libs/compileNgPropModel';
import CompilerFactory from './compilerFactory';

// 20200713 - special test
import compileReactButton from './compileReactButton';

export const createCompiler = () => {
  const compiler = new CompilerFactory();

  // Special Compiler
  // for example when nodeName === 'a' && hasAttr('b') && hasChildren('c')

  // Attribute Compiler
  compiler.add(compileNgRepeat);
  compiler.add(compileExistWhen);
  compiler.add(compileVisibleWhen);
  compiler.add(compileNgClass);
  // TODO: maybe we should put tranclude at the top? not sure at this moment
  compiler.add(compileTransclude);
  compiler.add(compileNgTransclude);
  compiler.add(compileNgSlot);

  // Custom Attribute
  // https://github.com/DBjelovuk/react-attribute-directives
  compiler.add(compileNgEnter);
  // compiler.add( compileInput );
  compiler.add(compileNgPropModel);
  compiler.add(compileNgClick);

  // 20200713 - test for coexist
  compiler.add(compileReactButton);

  // Element Compiler
  compiler.add(compileNgInclude);

  // General Compiler
  compiler.add(compileNode);
  compiler.add(compileText);

  return compiler;
};
