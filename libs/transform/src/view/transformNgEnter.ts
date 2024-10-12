/**
 * Text Node transformer
 */
import {
    NodeType
} from '@headless/utils';
import { ViewTransformContext } from './types';


const Attr = 'ng-enter';

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
function transform( node: HTMLElement, context: ViewTransformContext ) {
    const expr = node.getAttribute( Attr );
    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );
    node.setAttribute( 'onkeydown', `{{ function(e){ e.which === 13 && ( e.preventDefault() || vm.getAction("${expr}").call()) } }}` );

    return context.transformFn( node, context );
}

export default {
    when,
    transform
};

