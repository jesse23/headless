import {
    BASE_INDENT,
    NodeType
} from '@headless/utils';
import { ViewTransformContext, ViewTransformResult } from './types';

const Attr = 'exist-when';

/**
 * Evaluate condition for current transform
 * @param node input DOM Node
 * @param context input context
 * @returns true if condition matches
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
    // process indent
    let contents = [];
    const indent = BASE_INDENT.repeat( context.level );
    // indent in text node will add noise
    const expr = node.getAttribute( Attr );
    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );

    // write condition
    contents.push( `${indent}( ( ${expr} ) ?` );

    const childRes = context.transformFn( node, {
        ...context,
        level: context.level + 1
    } );

    if( childRes ) {
        contents = contents.concat( childRes.contents );
        // trim last comma and put last part ': null)'
        contents[contents.length - 1] = contents[contents.length - 1].replace( /,$/, ' : null' );
        contents.push( `${indent})${context.level ? ',' : ''}` );

        return {
            ...childRes,
            contents
        };
    }
}

/**
 * Transform view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns transform output
 */
function transformToTemplate( node: HTMLElement, context: ViewTransformContext ): ViewTransformResult | undefined {
    // process indent
    let contents = [];
    const indent = BASE_INDENT.repeat( context.level );
    // indent in text node will add noise
    const expr = node.getAttribute( Attr );
    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );

    // write condition
    // JSX Syntax:
    // - Element -> Elements:
    // - JS -> Element:
    // - JS -> JS: ()    // parent cover
    // - Element -> JSs: {}
    const isJsxCtx = context.context === 'JSX';
    contents.push( `${indent}${isJsxCtx ? '{ ' : ''}( ${expr} ) ? (` );

    const childRes = context.transformFn( node, {
        ...context,
        level: context.level + 1,
        context: 'JS'
    } );

    if( childRes ) {
        contents = contents.concat( childRes.contents );
        // trim last comma and put last part ': null)'
        contents.push( `${indent}) : null${isJsxCtx ? ' }' : ''}` );
        return {
            ...childRes,
            contents
        };
    }
}

export default {
    when,
    transform,
    transformToTemplate
};
