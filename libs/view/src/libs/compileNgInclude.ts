
/**
 * ng-include Element Node Compiler
 */
import {
    NodeType,
    BaseIndent,
    hyphenToCamelCase
} from './compileUtils';
import { CompileContext, CompileResult } from './types';

/**
 * Evaluate condition for current compiler
 * @param node input DOM Node
 * @param context input context
 * @returns true if condition matches
 */
function when( node: HTMLElement, _: CompileContext ): boolean {
    return  node.nodeType === NodeType.ELEMENT_NODE &&
        node.nodeName === 'NG-INCLUDE';
}

/**
 * Compile view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns compile output
 */
function compile( node: HTMLElement, context: CompileContext ): CompileResult | undefined {
    // process indent
    const index = context.index;
    const level = context.level;
    const indent = BaseIndent.repeat( level );

    // TODO: doesn't support <ng-include src='{{data.dynamicView}}' /> for now
    // TODO: ignore transclude for now
    // TODO: Ignore props for now
    let componentName = node.getAttribute( 'src' );
    if ( componentName ) {
        const deps = {} as Record<string,string>;
        let basePath = '';
        const match = componentName.match( /(.*)[\\/]([^\\/]+$)/ );
        if ( match ) {
            basePath = match[1] + '/';
            componentName = match[2];
        }
        const compiledType = `${hyphenToCamelCase( componentName )}`;

        const contents = [];
        contents.push( `${indent}createElement( ${compiledType}, {` );
        const attrIndent = BaseIndent.repeat( level + 1 );

        if( index !== undefined && !node.hasAttribute( 'key' ) ) {
            // Key
            contents.push( `${attrIndent}"key": ${index},` );
        }

        // contents.push( `${attrIndent}"props": ${xxx},` );
        contents[contents.length - 1] = contents[contents.length - 1].replace( /,$/, '' );
        contents.push( `${indent}} )${context.level ? ',' : ''}` );
        // deps[compiledType] = `../viewmodel/${componentName}ViewModel.json`;
        deps[compiledType] = `${basePath}viewmodel/${componentName}ViewModel`;
        return {
            contents,
            deps
        };
    }
}

/**
 * Compile view input to target JSX
 * @param node input DOM Node
 * @param context input context
 * @returns compile output
 */
function compileToTemplate( node: HTMLElement, context: CompileContext ): CompileResult | undefined {
    // process indent
    const level = context.level;
    const indent = BaseIndent.repeat( level );

    // TODO: doesn't support <ng-include src='{{data.dynamicView}}' /> for now
    // TODO: ignore transclude for now
    // TODO: Ignore props for now
    let componentName = node.getAttribute( 'src' );
    if ( componentName ) {
        const deps = {} as Record<string,string>;
        let basePath = '';
        const match = componentName.match( /(.*)[\\/]([^\\/]+$)/ );
        if ( match ) {
            basePath = match[1] + '/';
            componentName = match[2];
        }
        const compiledType = `${hyphenToCamelCase( componentName )}`;

        const contents = [];
        contents.push( `${indent}<${compiledType} />` );
        // deps[compiledType] = `../viewmodel/${componentName}ViewModel.json`;
        deps[compiledType] = `${basePath}viewmodel/${componentName}ViewModel`;
        return {
            contents,
            deps
        };
    }
}

export default {
    when,
    compile,
    compileToTemplate
};
