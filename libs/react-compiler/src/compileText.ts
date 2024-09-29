// Copyright (c) 2020 Siemens
/* eslint-env es6 */

/**
 * Text Node Compiler
 */
import {
    BaseIndent,
    NodeType
} from './compileUtils';
import { CompileContext, CompileResult } from './types';

/**
 * Evaluate condition for current compiler
 * @param {Node} node input DOM Node
 * @param {context} context input context
 * @returns {boolean} true if condition matches
 */
function when( node: HTMLElement, _: CompileContext ): boolean {
    return  node.nodeType === NodeType.TEXT_NODE;
}

/**
 * Compile view input to target framework format
 * @param {Node} node input DOM Node
 * @param {context} context input context
 * @returns {CompileOutut} compile output
 */
function compile( node: HTMLElement, context: CompileContext ): CompileResult | undefined {
    // process indent
    const res = [] as string[];
    const indent = BaseIndent.repeat( context.level );
    // indent in text node will add noise
    // TODO: this is very naive
    const matches = (node.textContent || '').split( /({{.*?}})/g );

    for( let i = 0; i < matches.length; i++ ) {
        const str = matches[i];
        if ( !/^(\r?\n)*$/.test( str ) ) {
            const match = str.match( /^{{(.*)}}$/ );
            if( match ) {
                res.push( `${indent}${match[1].trim()},` );
            } else {
                res.push( `${indent}${JSON.stringify( str )},` );
            }
        }
    }

    return {
        contents: res
    };
}

/**
 * Compile view input to target framework format
 * NOTE: this will reformat the text for now. Need a better solution later
 * worst case we need to use { "str" } way.
 * @param {Node} node input DOM Node
 * @param {context} context input context
 * @returns {CompileOutut} compile output
 */
function compileToTemplate( node: HTMLElement, context: CompileContext ): CompileResult | undefined {
    // process indent
    const indent = BaseIndent.repeat( context.level );
    const res = [];
    // indent in text node will add noise
    // TODO: this is very naive
    let matches = (node.textContent||'').trim().split( /({{.*?}})/g );
    matches = matches.filter( o => o.trim() );

    if ( matches && matches.length > 0 ) {
        res.push( indent );
        for( let i = 0; i < matches.length; i++ ) {
            const str = matches[i];
            if ( !/^(\r?\n)*$/.test( str ) ) {
                const match = str.match( /^{{(.*)}}$/ );
                if( match ) {
                    res.push( `{${match[1]}}` );
                } else {
                    res.push( `${str}` );
                }
            }
        }

        return {
            contents: [ res.join( '' ) ]
        };
    }
}

export default {
    when,
    compile,
    compileToTemplate
};
