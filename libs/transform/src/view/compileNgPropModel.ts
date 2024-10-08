/**
 * Text Node Compiler
 */
import {
    NodeType,
    generateUpdateVmPropFunction
} from './compileUtils';
import { CompileContext, CompileResult } from './types';

const Attr = 'ng-prop-model';

/**
 * Evaluate condition for current compiler
 * @param node input DOM Node
 * @param context input context
 * @returns true if condition matches
 */
function when( node: HTMLElement, _: CompileContext ): boolean {
    return node.nodeType === NodeType.ELEMENT_NODE &&
        node.hasAttribute( Attr );
}

/**
 * Compile view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns compile output
 */
function compile( node: HTMLElement, context: CompileContext ): CompileResult | undefined {
    const expr = node.getAttribute( Attr ) || '';

    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );

    // https://reactjs.org/docs/forms.html
    const type = node.getAttribute( 'type' );
    const attr =  type === 'checkbox'  ? 'checked' : 'value';
    const value =  type === 'checkbox'  ? 'e.target.checked' : 'e.target.value';
    if ( /^(ctx|data)[.[]/.test( expr ) ) {
        node.setAttribute( attr, `{{${expr}.uiValue}}` );
        node.setAttribute( 'onchange', `{{function(e){vm.dispatch({ scope: '${expr}', value: { 'uiValue': ${value}, 'dirty': true, error: vm.validate(${value}, ${expr})} })}}}` );
    } else {
        node.setAttribute( attr, `{{${expr}.uiValue}}` );
        node.setAttribute( 'onchange', `{{function(e){${generateUpdateVmPropFunction( expr, value )}}}}` );
    }

    return context.compileFn( node, context );
}

/**
 * Compile view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns compile output
 */
function compileToTemplate( node: HTMLElement, context: CompileContext ): CompileResult | undefined {
    const expr = node.getAttribute( Attr ) || '';

    // TODO: maybe we should clone node here
    node.removeAttribute( Attr );

    // https://reactjs.org/docs/forms.html
    const type = node.getAttribute( 'type' );
    const attr =  type === 'checkbox'  ? 'checked' : 'value';
    const value =  type === 'checkbox'  ? 'e.target.checked' : 'e.target.value';
    if ( /^(ctx|data)\./.test( expr ) ) {
        node.setAttribute( attr, `{{${expr}.uiValue}}` );
        node.setAttribute( 'onchange', `{{e => vm.dispatch({ scope: '${expr}', value: { 'uiValue': ${value}, 'dirty': true, error: vm.validate(${value}, ${expr})} })}}` );
    } else {
        node.setAttribute( attr, `{{${expr}.uiValue}}` );
        node.setAttribute( 'onchange', `{{e => ${generateUpdateVmPropFunction( expr, value )}}}` );
    }

    return context.compileFn( node, context );
}


export default {
    when,
    compile,
    compileToTemplate
};

