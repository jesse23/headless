// Copyright (c) 2020 Siemens
/* eslint-env es6 */

import { PathContext } from "./types";

export const BaseIndent = '  ';
// DOM Node type in browser
export const NodeType = {
    ELEMENT_NODE:                1,
    TEXT_NODE:                   3,
    CDATA_SECTION_NODE:          4,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE:                8,
    DOCUMENT_NODE:               9,
    DOCUMENT_TYPE_NODE:          10,
    DOCUMENT_FRAGMENT_NODE:      11
};

// NOTE: ootb dom attribute like 'class' and 'autocomplete' will also work but
// will get a react warning in console
export const ReactAttr : Record<string,string> = {
    class: 'className',           // even use class it is OK
    'ng-readonly': 'readOnly',    // value doesn't matter
    autocomplete: 'autoComplete',  // on|off
    onkeydown: 'onKeyDown',
    onsubmit: 'onSubmit',
    onclick: 'onClick',
    oninput: 'onInput',
    onchange: 'onChange',
    maxlength: 'maxLength',
    for: 'htmlFor'
};

/**
 * Process scope slot based on compile result
 * @param children compile result, could be function or just children
 * @param slotScope slot scope
 * @returns react component
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function processScopeSlot( children: any, slotScope: any ) {
    // TODO: maybe we add a children.__is scope slot or something
    if( children.scope ) {
        return children.eval( { ...children.scope, ...slotScope } );
    }
    return children;
}

/**
 * Apply ref to root element of view. React specific
 * @param elem view root element
 * @param vmContext view model definition. See comments for parseViewModel
 * @returns updated element
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function preProcessTemplate( elem: HTMLElement, vmContext: any ): HTMLElement {
    // TODO: very quick work for get children. Need rework
    const currElem = ( elem.children && elem.children.length === 1 ? elem.firstElementChild : elem ) as HTMLElement;

    if ( vmContext && vmContext.options && vmContext.options.useDomNode === true ) {
        currElem.setAttribute( 'ref', '{{vm.ref}}' );
    }

    // merge class if any
    if ( currElem.hasAttribute && !currElem.hasAttribute( 'aw-repeat' ) ) {
        const currClassValue = currElem.classList ? currElem.classList.value : '';
        const expr = currClassValue ? `'${currClassValue}' + ( props.className ? ' ' + props.className : '' )` :
           'props.className ? props.className : ""';
        currElem.setAttribute( 'class', `{{${expr}}}` );
    }

    // merge style
    const expr = 'props.style || {}';
    currElem.setAttribute( 'style', `{{${expr}}}` );

    // return elem;
    return currElem;
}


/**
 * Convert aw-class structure to class name list.
 * - For now only support structure below:
 *   {
 *       'midContrast': prop.type === 'middle'
 *   }
 * - For now if prop is undfined, in react it will error out
 * @param awClassDef aw-class definition
 * @returns class list as
 */
export function processAwClass( awClassDef: Record<string, boolean> ) {
    const res = [];
    for( const key in awClassDef ) {
        if( awClassDef[key] ) {
            res.push( key );
        }
    }
    return res.join( ' ' );
}

/**
 * Generate render functiond body - reused for runtime compile too
 * @param content renderFn content as string
 * @param props proprety definition
 * @param opts options
 * @returns fuction body as text to match 'renderFn( vm )'
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function generateRenderFnBody( content: string[], props: Record<string, any>, opts = {} as Record<string, unknown> ) {
    const res = [];

    if( !opts.jsx ) {
        // TODO: condition here is wrong, we should check for current view, do we have any viewDeps which has
        // if( opts.scopeSlot ) {
            res.push( '    var slotScope = Object.assign({}, vm.props);' );
            res.push( '    slotScope.ctx = vm.ctx;' );
            res.push( '    slotScope.data = vm.data;' );
            res.push( '    slotScope.props = vm.props;' );
            res.push( '    slotScope.vm = vm;' );
        // }

        res.push(
`    var ctx = vm.ctx;
    var data  = vm.data;
    var props = vm.props;` );
        // generate prop assignment
        if ( props && Object.keys( props ).length > 0 ) {
            res.push( '' );
            res.push( '    // props assignment' );
            for ( const key in props ) {
                const prop = props[key];
                res.push( `    var ${key} = props.${key};` );
                if ( prop.binding === 'InputOutput' ) {
                    res.push( `    var update${hyphenToCamelCase( key )} = props.update${hyphenToCamelCase( key )};` );
                } else {
                    // TODO: palce hoder for avoid compile error can skip it later
                    res.push( `    var update${hyphenToCamelCase( key )} = function(){};` );
                }
            }
            res.push( '' );
        }
    } else {
        // TODO: condition here is wrong, we should check for current view, do we have any viewDeps which has
        // if( opts.scopeSlot ) {
            res.push( '    var slotScope = { ...props, vm, ctx, data, props };' );
        // }

        if ( props && Object.keys( props ).length > 0 ) {
            const exprs = [];
            for ( const key in props ) {
                exprs.push( key );
                const prop = props[key];
                if ( prop.binding === 'InputOutput' ) {
                    exprs.push( `update${hyphenToCamelCase( key )}` );
                } else {
                    // TODO: palce hoder for avoid compile error can skip it later
                    res.push( `    var update${hyphenToCamelCase( key )} = () => null;` );
                }
            }
            res.push( `    const { ${exprs.join( ', ' )} } = props;` );
        }
    }

    res.push( '    var h = createElement;' );
    res.push( '    return (' );
    res.push( content );
    res.push( '    );' );

    return res.join( '\n' );
}

/**
 * Helper functon for ng aw-repeat.
 * If fn is provided, return
 * @param setObj object that go through the loop
 * @param getDispatch call back to get dispatch based on key
 * @param callback call back function that process the loop, used in react like vDOM approach
 * @returns result for processRepeat, either callback result or new loop object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function processRepeat( setObj: any, getDispatch: any, callback: any ) {
    if ( !setObj ) {
        return null;
    }

    const res = [];
    for( const key in setObj ) {
        // TODO: needs to handle int, boolean.....later
        const instance = typeof setObj[key] === 'string'  ? new String( setObj[key] ) : { ...setObj[key] };
        instance.dispatch = getDispatch( key );
        res.push( callback( instance, key ) );
    }
    return res;
}

/**
 * convert sting like 'my-button' to 'MyButton'
 *
 * @param str input string as 'my-button'
 * @returns output string as 'MyButton'
 */
export const hyphenToCamelCase = ( str: string ): string => {
    return str.replace( /^./, str[0].toUpperCase() ).replace( /-(.)/g, ( _, firstMatch ) => firstMatch.toUpperCase() );
};

/**
 * generate update function.  'prop.uiValue' => 'updateProp( "uiValue", val )'
 * @param expr property expression
 * @param value follow up attr expression
 * @returns updateProp function
 */
export function generateUpdateVmPropFunction( expr: string, value: string ) {
    const { scope, path } = parseDataPath( expr );
    return `update${hyphenToCamelCase( scope )}( { scope: '${path || ''}', value: { 'uiValue': ${value}, 'dirty': true, error: vm.validate(${value}, ${expr})} } )`;
}

/**
 * parse data path to scope + subPatoh
 * @param pathStr path string like 'data.a.b'
 * @returns path structure like:
 * {
 *     scope: 'data'
 *     path: 'a.b'
 * }
 */
export const parseDataPath = ( pathStr: string ): PathContext => {
    const match = pathStr.match( /[.[]/ );
    if ( match && match.index !== undefined ) {
        return {
            scope: pathStr.substr( 0, match.index ),
            path: pathStr.substr( match[0] === '[' ? match.index : match.index + 1 )
        };
    }
    return {
        scope: pathStr,
        path: undefined
    };
};