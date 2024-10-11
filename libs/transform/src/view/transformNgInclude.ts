
/**
 * ng-include Element Node transform
 */
import {
    NodeType,
    BaseIndent,
    hyphenToCamelCase
} from './transformUtils';
import { ViewTransformContext, ViewTransformResult } from './types';

/**
 * Evaluate condition for current transform
 * @param node input DOM Node
 * @param context input context
 * @returns true if condition matches
 */
function when( node: HTMLElement, _: ViewTransformContext ): boolean {
    return  node.nodeType === NodeType.ELEMENT_NODE &&
        node.nodeName === 'NG-INCLUDE';
}

/**
 * transform view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns transform output
 */
function transform( node: HTMLElement, context: ViewTransformContext ): ViewTransformResult | undefined {
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
        const transformedType = `${hyphenToCamelCase( componentName )}`;

        const contents = [];
        contents.push( `${indent}createElement( ${transformedType}, {` );
        const attrIndent = BaseIndent.repeat( level + 1 );

        if( index !== undefined && !node.hasAttribute( 'key' ) ) {
            // Key
            contents.push( `${attrIndent}"key": ${index},` );
        }

        // contents.push( `${attrIndent}"props": ${xxx},` );
        contents[contents.length - 1] = contents[contents.length - 1].replace( /,$/, '' );
        contents.push( `${indent}} )${context.level ? ',' : ''}` );
        // deps[transformedType] = `../viewmodel/${componentName}ViewModel.json`;
        deps[transformedType] = `${basePath}viewmodel/${componentName}ViewModel`;
        return {
            contents,
            deps
        };
    }
}

/**
 * transform view input to target JSX
 * @param node input DOM Node
 * @param context input context
 * @returns transform output
 */
function transformToTemplate( node: HTMLElement, context: ViewTransformContext ): ViewTransformResult | undefined {
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
        const transformedType = `${hyphenToCamelCase( componentName )}`;

        const contents = [];
        contents.push( `${indent}<${transformedType} />` );
        // deps[transformedType] = `../viewmodel/${componentName}ViewModel.json`;
        deps[transformedType] = `${basePath}viewmodel/${componentName}ViewModel`;
        return {
            contents,
            deps
        };
    }
}

export default {
    when,
    transform,
    transformToTemplate
};
