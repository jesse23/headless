import {
    BASE_INDENT,
    NodeType
} from '@headless/utils';
import { ViewTransformContext, ViewTransformResult } from './types';

/**
 * Evaluate condition for current transformer
 * @param {Node} node input DOM Node
 * @param {context} context input context
 * @returns {boolean} true if condition matches
 */
function when( node: HTMLElement, _: ViewTransformContext ): boolean {
    return  node.nodeType === NodeType.TEXT_NODE;
}

/**
 * transform view input to target framework format
 * @param {Node} node input DOM Node
 * @param {context} context input context
 * @returns {transformOutut} transform output
 */
function transform( node: HTMLElement, context: ViewTransformContext ): ViewTransformResult | undefined {
    // process indent
    const res = [] as string[];
    const indent = BASE_INDENT.repeat( context.level );
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
 * transform view input to target framework format
 * NOTE: this will reformat the text for now. Need a better solution later
 * worst case we need to use { "str" } way.
 * @param {Node} node input DOM Node
 * @param {context} context input context
 * @returns {transformOutut} transform output
 */
function transformToTemplate( node: HTMLElement, context: ViewTransformContext ): ViewTransformResult | undefined {
    // process indent
    const indent = BASE_INDENT.repeat( context.level );
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
    transform,
    transformToTemplate
};
