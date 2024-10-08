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
 * convert sting like 'my-button' to 'MyButton'
 *
 * @param str input string as 'my-button'
 * @returns output string as 'MyButton'
 */
export const hyphenToCamelCase = ( str: string ): string => {
    return str.replace( /^./, str[0].toUpperCase() ).replace( /-(.)/g, ( _, firstMatch ) => firstMatch.toUpperCase() );
};

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
    if ( currElem.hasAttribute && !currElem.hasAttribute( 'ng-repeat' ) ) {
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
 * Convert ng-class structure to class name list.
 * - For now only support structure below:
 *   {
 *       'midContrast': prop.type === 'middle'
 *   }
 * - For now if prop is undfined, in react it will error out
 * @param ngClassDef ng-class definition
 * @returns class list as
 */
export function processNgClass( ngClassDef: Record<string, boolean> ) {
    const res = [];
    for( const key in ngClassDef ) {
        if( ngClassDef[key] ) {
            res.push( key );
        }
    }
    return res.join( ' ' );
}

/**
 * Helper function for ng ng-repeat.
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
 * generate update function.  'prop.uiValue' => 'updateProp( "uiValue", val )'
 * @param expr property expression
 * @param value follow up attr expression
 * @returns updateProp function
 */
export function generateUpdateVmPropFunction( expr: string, value: string ) {
    const { scope, path } = parseDataPath( expr );
    return `update${hyphenToCamelCase( scope )}( { scope: '${path || ''}', value: { 'uiValue': ${value}, 'dirty': true, error: vm.validate(${value}, ${expr})} } )`;
}

