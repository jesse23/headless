/**
 * Transclude/Slot Statement Compiler
 * NOTE: we can do it in better way like:
 *     `<div>(props.children)?(props.children):default</div>`
 * For now don't want to refactor too much so we use:
 *     `(props.children)?<div>props.children</div>:<div>default</div>`
 */
import {
    BaseIndent,
    NodeType
} from './compileUtils';
import { CompileContext, CompileResult } from './types';

const Attr = 'aw-transclude';

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
    // process indent
    let contents = [];
    let deps = {};
    const options = {} as Record<string, boolean>;
    const indent = BaseIndent.repeat( context.level );

    node.removeAttribute( Attr );
    const defaultNode = node;
    const slotNode = node.cloneNode( false ) as HTMLElement;
    slotNode.innerHTML = '{{processScopeSlot(props.children, slotScope)}}';

    // write condition
    // TODO: Need to exclude white space case maybe
    contents.push( `${indent}( ( props.children ) ?` );

    const slotChildRes = context.compileFn( slotNode, {
        ...context,
        level: context.level + 1
    } );

    const defaultChildRes = context.compileFn( defaultNode, {
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
    // <aw-list>
    //   <button aw-transclude>{{item.name}}</button>
    // </aw-list>
    // A: For now not supported, we will see if we have real case
    options.scopeSlot = true;

    return {
        contents,
        deps,
        options
    };
}

/**
 * Compile view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns compile output
 */
function compileToTemplate( node: HTMLElement, context: CompileContext ): CompileResult {
    // process indent
    let contents = [];
    let deps = {};
    const options = {} as Record<string, boolean>;
    const indent = BaseIndent.repeat( context.level );

    node.removeAttribute( Attr );
    const defaultNode = node;
    const slotNode = node.cloneNode( false ) as HTMLElement;
    slotNode.innerHTML = '{{processScopeSlot(props.children, slotScope)}}';

    // write condition
    // TODO: Need to exclude white space case maybe
    const isJsxCtx = context.context === 'JSX';
    contents.push( `${indent}${isJsxCtx ? '{ ' : ''}( props.children ) ? (` );

    const slotChildRes = context.compileFn( slotNode, {
        ...context,
        level: context.level + 1,
        context: 'JS'
    } );

    const defaultChildRes = context.compileFn( defaultNode, {
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
    // <aw-list>
    //   <button aw-transclude>{{item.name}}</button>
    // </aw-list>
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
    compile,
    compileToTemplate
};
