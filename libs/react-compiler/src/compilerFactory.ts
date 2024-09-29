/**
 * Compiler Design
 * https://github.com/Few-UI/few/blob/master/src/few-view-factory.js
 *
 * - Compiler Factory
 *   - define:  add compiler to array, order matters
 *   - compile: pick proper compiler and compile
 *
 * - Compiler
 *   - compile
 *     - input
 *       - node: raw DOM Node
 *       - ctx
 *         - deps: custom element dependency as key-value pair ( value dosen't matter for now )
 *         - level: current node level in the compile tree
 *         - index: curren node index in siblings
 *
 *     - output
 *       - contents:  text result as string array (line based)
 *       - deps: new dependencies defined by aw-include
 *       - scope: other compile ctx you want to pass out. For example:
 *         - slotScope: is current element has aw-transclude
 *
 *   - when
 *     - condition to decide if current compiler is valid for based on the input
 *
 *   - name: name of the compiler ( not sure at this moment )
 */

import {
    preProcessTemplate
} from './compileUtils';
import { CompileContext } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class CompilerFactory {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private _compilers: any[];

    constructor() {
        this._compilers = [];
    }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
    add( compiler: any ) {
        this._compilers.push( compiler );
    }

    compile( node: HTMLElement, context = {} as CompileContext ) {
        context.compileFn = this.compile.bind( this );
        for( const idx in this._compilers ) {
            const compiler = this._compilers[idx];
            if( compiler.when( node, context ) ) {
                return context.toTemplate && compiler.compileToTemplate ?
                    compiler.compileToTemplate( node, context ) :
                    compiler.compile( node, context );
            }
        }
    }

    /**
     * parse view content and convert it to React component
     *
     * @param {Node}  node html content as DOM Node
     * @param {object} vmContext view model definition. See comments for parseViewModel
     * @param {boolean} pretty if true compile to JSX
     * @returns {object} view compile result
     */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    compileView( node: HTMLElement, vmContext = {} as any, pretty = false ) {
        const output = this.compile( preProcessTemplate( node, vmContext ), {
            level: 0,
            deps: vmContext.viewDesc || vmContext.viewDeps || {},
            props: vmContext.props || {},
            toTemplate: pretty,
        } as CompileContext );

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
