import {
    NodeType
} from '@headless/utils';
import { ViewTransformContext, ViewTransformResult } from './types';


const Attr = 'action';

/**
 * Evaluate condition for current transformer
 * @param node input DOM Node
 * @param context input context
 * @returns true if condition matches
 */
function when( node: HTMLElement, _: ViewTransformContext ): boolean {
    const expr = node.getAttribute && node.getAttribute( Attr );
    return node.nodeType === NodeType.ELEMENT_NODE &&
        node.nodeName === 'REACT-BUTTON' &&
        !(expr||'').startsWith( '{{' );
}

/**
 * transform view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns transform output
 */
function transform( node: HTMLElement, context: ViewTransformContext ): ViewTransformResult | undefined {
    const expr = node.getAttribute( Attr );
    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );
    node.setAttribute( Attr, `{{ vm.getAction('${expr}') }}` );

    return context.transformFn( node, context );
}

export default {
    when,
    transform
};

