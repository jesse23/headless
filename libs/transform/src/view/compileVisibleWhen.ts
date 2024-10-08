import {
    NodeType
} from './compileUtils';
import { CompileContext, CompileResult } from './types';

const Attr = 'visible-when';

/**
 * Evaluate condition for current compiler
 * @param {Node} node input DOM Node
 * @param {context} context input context
 * @returns {boolean} true if condition matches
 */
function when( node: HTMLElement, _: CompileContext ): boolean {
    return  node.nodeType === NodeType.ELEMENT_NODE &&
        node.hasAttribute( Attr );
}

/**
 * Compile view input to target framework format
 * @param {Node} node input DOM Node
 * @param {context} context input context
 * @returns {CompileOutut} compile output
 */
function compile( node: HTMLElement, context: CompileContext ): CompileResult | undefined {
    // indent in text node will add noise
    const expr = node.getAttribute( Attr );
    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );
    node.setAttribute( 'style', `{{(${expr}) ? {} : { display: 'none' }}}` );

    return context.compileFn( node, context );
}

export default {
    when,
    compile
};
