/**
 * Text Node Compiler
 */
import {
    NodeType
} from './compileUtils';
import { CompileContext, CompileResult } from './types';


const Attr = 'aw-click';

/**
 * Evaluate condition for current compiler
 * @param node input DOM Node
 * @param context input context
 * @returns true if condition matches
 */
function when( node: HTMLElement, _: CompileContext ): boolean {
    return node.nodeType === NodeType.ELEMENT_NODE &&
        node.hasAttribute( Attr );
}

/**
 * Compile view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns compile output
 */
function compile( node: HTMLElement, context: CompileContext ): CompileResult {
    const expr = node.getAttribute( Attr );
    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );
    node.setAttribute( 'onclick', `{{ function($event){ return ${expr} } }}` );

    return context.compileFn( node, context );
}

export default {
    when,
    compile
};

