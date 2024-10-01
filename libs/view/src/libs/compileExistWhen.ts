import {
    BaseIndent,
    NodeType
} from './compileUtils';
import { CompileContext, CompileResult } from './types';

const Attr = 'exist-when';

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
function compile( node: HTMLElement, context: CompileContext ): CompileResult | undefined {
    // process indent
    let contents = [];
    const indent = BaseIndent.repeat( context.level );
    // indent in text node will add noise
    const expr = node.getAttribute( Attr );
    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );

    // write condition
    contents.push( `${indent}( ( ${expr} ) ?` );

    const childRes = context.compileFn( node, {
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
 * Compile view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns compile output
 */
function compileToTemplate( node: HTMLElement, context: CompileContext ): CompileResult | undefined {
    // process indent
    let contents = [];
    const indent = BaseIndent.repeat( context.level );
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

    const childRes = context.compileFn( node, {
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
    compile,
    compileToTemplate
};
