/**
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

const Attr = 'ng-slot';

/**
 * Evaluate condition for current transformr
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
    // process indent
    let contents = [];
    let deps = {};
    const options = {} as Record<string, boolean>;
    const indent = BASE_INDENT.repeat( context.level );

    node.removeAttribute( Attr );
    const defaultNode = node;
    const slotNode = node.cloneNode( false ) as HTMLElement;
    slotNode.innerHTML = '{{processScopeSlot(props.children, slotScope)}}';

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

    // trim last comma and put finish part
    contents[contents.length - 1] = contents[contents.length - 1].replace( /,$/, '' );
    contents.push( `${indent})${context.level ? ',' : ''}` );

    // add transclude....
    // Q: what can we do for case below:
    // <ng-list>
    //   <button ng-transclude>{{item.name}}</button>
    // </ng-list>
    // A: For now not supported, we will see if we have real case
    options.scopeSlot = true;

    return {
        contents,
        deps,
        options
    };
}

/**
 * transform view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns transform output
 */
function transformToTemplate( node: HTMLElement, context: ViewTransformContext ): ViewTransformResult {
    // process indent
    let contents = [];
    let deps = {};
    const options = {} as Record<string, boolean>;
    const indent = BASE_INDENT.repeat( context.level );

    node.removeAttribute( Attr );
    const defaultNode = node;
    const slotNode = node.cloneNode( false ) as HTMLElement;
    slotNode.innerHTML = '{{processScopeSlot(props.children, slotScope)}}';

    // write condition
    // TODO: Need to exclude white space case maybe
    const isJsxCtx = context.context === 'JSX';
    contents.push( `${indent}${isJsxCtx ? '{ ' : ''}( props.children ) ? (` );

    const slotChildRes = context.transformFn( slotNode, {
        ...context,
        level: context.level + 1,
        context: 'JS'
    } );

    const defaultChildRes = context.transformFn( defaultNode, {
        ...context,
        level: context.level + 1,
        context: 'JS'
    } );

    // merge props.children branch
    contents = contents.concat( slotChildRes.contents );
    deps = Object.assign( deps, slotChildRes.deps );

    // trim last comma and put last part ':'
    contents.push( `${indent} ) : (` );

    // merge default branch
    contents = contents.concat( defaultChildRes.contents );
    deps = Object.assign( deps, defaultChildRes.deps );

    // trim last comma and put finish part
    contents.push( `${indent})${isJsxCtx ? ' }' : ''}` );

    // add transclude....
    // Q: what can we do for case below:
    // <ng-list>
    //   <button ng-transclude>{{item.name}}</button>
    // </ng-list>
    // A: For now not supported, we will see if we have real case
    options.scopeSlot = true;

    return {
        contents,
        deps,
        options
    };
}

export default {
    when,
    transform,
    transformToTemplate
};
