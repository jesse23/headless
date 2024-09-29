/**
 * Compiler React Button
 */
import {
    NodeType
} from './compileUtils';
import { CompileContext, CompileResult } from './types';


const Attr = 'action';

/**
 * Evaluate condition for current compiler
 * @param node input DOM Node
 * @param context input context
 * @returns true if condition matches
 */
function when( node: HTMLElement, _: CompileContext ): boolean {
    const expr = node.getAttribute && node.getAttribute( Attr );
    return node.nodeType === NodeType.ELEMENT_NODE &&
        node.nodeName === 'REACT-BUTTON' &&
        !(expr||'').startsWith( '{{' );
}

/**
 * Compile view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns compile output
 */
function compile( node: HTMLElement, context: CompileContext ): CompileResult | undefined {
    const expr = node.getAttribute( Attr );
    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );
    node.setAttribute( Attr, `{{ vm.getAction('${expr}') }}` );

    return context.compileFn( node, context );
}

export default {
    when,
    compile
};

