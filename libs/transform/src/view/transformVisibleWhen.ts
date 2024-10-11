import {
    NodeType
} from './transformUtils';
import { ViewTransformContext, ViewTransformResult } from './types';

const Attr = 'visible-when';

/**
 * Evaluate condition for current transformer
 * @param {Node} node input DOM Node
 * @param {context} context input context
 * @returns {boolean} true if condition matches
 */
function when( node: HTMLElement, _: ViewTransformContext ): boolean {
    return  node.nodeType === NodeType.ELEMENT_NODE &&
        node.hasAttribute( Attr );
}

/**
 * Transform view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns transform output
 */
function transform( node: HTMLElement, context: ViewTransformContext ): ViewTransformResult | undefined {
    // indent in text node will add noise
    const expr = node.getAttribute( Attr );
    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );
    node.setAttribute( 'style', `{{(${expr}) ? {} : { display: 'none' }}}` );

    return context.transformFn( node, context );
}

export default {
    when,
    transform
};
