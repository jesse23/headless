import {
    NodeType
} from './compileUtils';
import { CompileContext, CompileResult } from './types';

const Attr = 'ng-class';

/**
 * Evaluate condition for current compiler
 * @param node input DOM Node
 * @param context input context
 * @returns true if condition matches
 */
function when( node: HTMLElement, _: CompileContext ): boolean {
    return  node.nodeType === NodeType.ELEMENT_NODE &&
        node.hasAttribute( Attr );
}

/**
 * Compile view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns compile output
 */
function compile( node: HTMLElement, context: CompileContext ): CompileResult {
    // indent in text node will add noise
    const expr = node.getAttribute( Attr );
    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );
    const currClassValue = node.classList ? node.classList.value : '';
    const match = currClassValue.match( /^{{(.*)}}$/ );

    if( match ) {
        const classExpr = `processAwClass(${expr}) + ' ' + ${match[1]}`;
        node.setAttribute( 'class', `{{${classExpr}}}` );
    } else {
        const classExpr = currClassValue ? `processAwClass(${expr}) + ' ${currClassValue}'` :
            `processAwClass(${expr})`;
        node.setAttribute( 'class', `{{${classExpr}}}` );
    }


    return context.compileFn( node, context );
}

export default {
    when,
    compile
};
