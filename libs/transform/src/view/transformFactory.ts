/**
 * - transformer Factory
 *   - define:  add transformer to array, order matters
 *   - transform: pick proper transformer and transform
 *
 * - transformer
 *   - transform
 *     - input
 *       - node: raw DOM Node
 *       - ctx
 *         - deps: custom element dependency as key-value pair ( value doesn't matter for now )
 *         - level: current node level in the transform tree
 *         - index: current node index in siblings
 *
 *     - output
 *       - contents:  text result as string array (line based)
 *       - deps: new dependencies defined by ng-include
 *       - scope: other transform ctx you want to pass out. For example:
 *         - slotScope: is current element has ng-transclude
 *
 *   - when
 *     - condition to decide if current transformer is valid for based on the input
 *
 *   - name: name of the transformer ( not sure at this moment )
 */

import {
    preProcessTemplate
} from './transformUtils';
import { ViewTransformContext } from './types';

export default class transformerFactory {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private _transformers: any[];

    constructor() {
        this._transformers = [];
    }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
    add( transformer: any ) {
        this._transformers.push( transformer );
    }

    transform( node: HTMLElement, context = {} as ViewTransformContext ) {
        context.transformFn = this.transform.bind( this );
        for( const idx in this._transformers ) {
            const transformer = this._transformers[idx];
            if( transformer.when( node, context ) ) {
                return context.toTemplate && transformer.transformToTemplate ?
                    transformer.transformToTemplate( node, context ) :
                    transformer.transform( node, context );
            }
        }
    }

    /**
     * parse view content and convert it to React component
     *
     * @param {Node}  node html content as DOM Node
     * @param {object} vmContext view model definition. See comments for parseViewModel
     * @param {boolean} pretty if true transform to JSX
     * @returns {object} view transform result
     */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformView( node: HTMLElement, vmContext = {} as any, pretty = false ) {
        const output = this.transform( preProcessTemplate( node, vmContext ), {
            level: 0,
            deps: vmContext.viewDesc || vmContext.viewDeps || {},
            props: vmContext.props || {},
            toTemplate: pretty,
        } as ViewTransformContext );

        return {
            contents: output.contents.join( '\n' ),
            inlineDeps: output.inlineDeps || {},
            viewDeps: { ...output.deps, ...vmContext.viewDeps },
            libDeps:  vmContext.libDeps || {},
            options:  { ...output.options, ...vmContext.options },
            partialStore: { ...output.partialStore, ...vmContext.partialStore },
            props:    vmContext.props || {},
        };
    }
}
