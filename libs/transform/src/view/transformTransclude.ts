/**
 * Transclude/Slot Statement transformr
 * NOTE: we can do it in better way like:
 *     `<div>(props.children)?(props.children):default</div>`
 * For now don't want to refactor too much so we use:
 *     `(props.children)?<div>props.children</div>:<div>default</div>`
 */
import {
    BASE_INDENT,
    NodeType
} from '@headless/utils';
import { ViewTransformContext, ViewTransformResult } from './types';

const Attr = 'transclude';

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
function transform( node: HTMLElement, context: ViewTransformContext ): ViewTransformResult | undefined {
    // process indent
    let contents = [];
    let deps = {};
    let scope = {};
    const indent = BASE_INDENT.repeat( context.level );

    node.removeAttribute( Attr );
    const defaultNode = node;
    const slotNode = node.cloneNode( false ) as HTMLElement;
    slotNode.innerHTML = '{{props.children}}';

    // write condition
    // TODO: Need to exclude white space case maybe
    contents.push( `${indent}( ( props.children ) ?` );

    const slotChildRes = context.transformFn( slotNode, {
        ...context,
        level: context.level + 1
    } );

    const defaultChildRes = context.transformFn( defaultNode, {
        ...context,
        level: context.level + 1
    } );

    // merge props.children branch
    contents = contents.concat( slotChildRes.contents );
    deps = Object.assign( deps, slotChildRes.deps );

    // trim last comma and put last part ':'
    contents[contents.length - 1] = contents[contents.length - 1].replace( /,$/, ' :' );

    // merge default branch
    contents = contents.concat( defaultChildRes.contents );
    deps = Object.assign( deps, defaultChildRes.deps );
    scope = Object.assign( scope, defaultChildRes.scope );

    // trim last comma and put finish part
    contents[contents.length - 1] = contents[contents.length - 1].replace( /,$/, '' );
    contents.push( `${indent})${context.level ? ',' : ''}` );

    return {
        contents,
        deps,
        scope
    };
}

/**
 * transform view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns transform output
 */
function transformToTemplate( node: HTMLElement, context: ViewTransformContext ): ViewTransformResult | undefined {
    // process indent
    let contents = [];
    let deps = {};
    let scope = {};
    const indent = BASE_INDENT.repeat( context.level );

    node.removeAttribute( Attr );
    const defaultNode = node;
    const slotNode = node.cloneNode( false ) as HTMLElement;
    slotNode.innerHTML = '{{props.children}}';

    // write condition
    // TODO: Need to exclude white space case maybe
    const isJsxCtx = context.context === 'JSX';
    contents.push( `${indent}${isJsxCtx ? '{ ' : ''}( props.children ) ? (` );

    const slotChildRes = context.transformFn( slotNode, {
        ...context,
        level: context.level + 1,
        context: 'JS'
    } );

    // merge props.children branch
    contents = contents.concat( slotChildRes.contents );
    deps = Object.assign( deps, slotChildRes.deps );

    // trim last comma and put last part ':'
    contents.push( `${indent}) : (` );

    const defaultChildRes = context.transformFn( defaultNode, {
        ...context,
        level: context.level + 1,
        context: 'JS'
    } );

    // merge default branch
    contents = contents.concat( defaultChildRes.contents );
    deps = Object.assign( deps, defaultChildRes.deps );
    scope = Object.assign( scope, defaultChildRes.scope );

    // trim last comma and put finish part
    contents.push( `${indent})${isJsxCtx ? ' }' : ''}` );

    return {
        contents,
        deps,
        scope
    };
}

export default {
    when,
    transform,
    transformToTemplate
};
