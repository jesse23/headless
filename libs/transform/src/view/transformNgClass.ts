import {
    NodeType
} from './transformUtils';
import { ViewTransformContext, ViewTransformResult } from './types';

const Attr = 'ng-class';

/**
 * Evaluate condition for current transformer
 * @param node input DOM Node
 * @param context input context
 * @returns true if condition matches
 */
function when( node: HTMLElement, _: ViewTransformContext ): boolean {
    return  node.nodeType === NodeType.ELEMENT_NODE &&
        node.hasAttribute( Attr );
}

/**
 * transform view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns transform output
 */
function transform( node: HTMLElement, context: ViewTransformContext ): ViewTransformResult {
    // indent in text node will add noise
    const expr = node.getAttribute( Attr );
    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );
    const currClassValue = node.classList ? node.classList.value : '';
    const match = currClassValue.match( /^{{(.*)}}$/ );

    if( match ) {
        const classExpr = `processNgClass(${expr}) + ' ' + ${match[1]}`;
        node.setAttribute( 'class', `{{${classExpr}}}` );
    } else {
        const classExpr = currClassValue ? `processNgClass(${expr}) + ' ${currClassValue}'` :
            `processNgClass(${expr})`;
        node.setAttribute( 'class', `{{${classExpr}}}` );
    }


    return context.transformFn( node, context );
}

export default {
    when,
    transform
};
