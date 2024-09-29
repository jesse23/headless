/* eslint-env es6 */
import compileElement from './compileElement';
import compileText from './compileText';
import compileAwInclude from './compileAwInclude';
import compileCondition from './compileCondition';
import compileVisible from './compileVisible';
import compileClass from './compileClass';
import compileTransclude from './compileTransclude';
import compileAwTransclude from './compileAwTransclude';
import compileNgTransclude from './compileNgTransclude';
import compileRepeat from './compileRepeat';
import compileEnter from './compileEnter';
import compileClick from './compileClick';
import compilePropModel from './compilePropModel';
import CompilerFactory from './compilerFactory';

// 20200713 - special test
import compileReactButton from './compileReactButton';

export const compiler = new CompilerFactory();

// Special Compiler
// for example when nodeName === 'a' && hasAttr('b') && hasChildren('c')

// Attribute Compiler
compiler.add( compileRepeat );
compiler.add( compileCondition );
compiler.add( compileVisible );
compiler.add( compileClass );
// TODO: maybe we should put tranclude at the top? not sure at this moment
compiler.add( compileTransclude );
compiler.add( compileNgTransclude );
compiler.add( compileAwTransclude );

// Custom Attribute
// https://github.com/DBjelovuk/react-attribute-directives
compiler.add( compileEnter );
// compiler.add( compileInput );
compiler.add( compilePropModel );
compiler.add( compileClick );

// 20200713 - test for coexist
compiler.add( compileReactButton );

// Element Compiler
compiler.add( compileAwInclude );

// General Compiler
compiler.add( compileElement );
compiler.add( compileText );
