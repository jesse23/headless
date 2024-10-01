import {
    Data,
    FunctionType,
    Value,
} from './types';

export const BaseIndent = '  ';

// DOM Node type in browser
const Node = {
    ELEMENT_NODE: 1,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11
};

/**
 * escape string as regex input
 * https://stackoverflow.com/questions/6828637/escape-regexp-strings
 *
 * @param str input string
 * @returns output string with regular expression escaped
 */
export const escapeRegExp = ( str: string ): string => {
    return str.replace( /[.*+?^${}()|[\]\\]/g, '\\$&' ); // $& means the whole matched string
};

/**
 * convert string like 'MyButton' to 'my-button'
 * @param str input string as 'MyButton'
 * @returns output string as 'my-button'
 */
export const camelCaseToHyphen = ( str: string ): string => {
    return str.replace( /^./, str[0].toLowerCase() ).replace( /([A-Z])/g, ( _, firstMatch ) => `-${firstMatch.toLowerCase()}` );
};


/**
 * evaluate expression string as Javascript expression
 *
 * @param expr expression string
 * @param scope evaluation scope as name-value pair
 * @param ignoreError if true the error is not thrown
 * @param applyObject object will apply to the expr as this
 * @returns evaluation result
 */
export const evalExpression = (
    expr: string,
    scope: Data,
    ignoreError = false,
    applyObject?: object
): unknown => {
    const names = scope ? Object.keys( scope ) : [];
    const vals = scope ? Object.values( scope ) : [];
    try {
        const func = new Function( ...names, `return ${expr};` );
        return func.apply( applyObject, vals );
    } catch ( e: unknown ) {
        if ( !ignoreError ) {
            throw new Error( `evalExpression('${expr}') => ${(e as Record<string,string>).message}` );
        } else {
            return undefined;
        }
    }
};


/**
 * Parse view string as DOM without interpret it. Browser version
 *
 * @param input view template as string
 * @returns DOM Node as result
 */
export const parseView = ( input: string ): HTMLElement => {
    const parser = new DOMParser();
    const fragement = document.createDocumentFragment();
    fragement.appendChild( parser.parseFromString( `<div>${input}</div>`, 'text/html' ).body.firstChild || document.createElement( 'div' ) );
    return (fragement.firstChild || document.createElement( 'div' )) as HTMLElement;
};

/**
 * Bind arguments starting after however many are passed in.
 * https://stackoverflow.com/questions/27699493/javascript-partially-applied-function-how-to-bind-only-the-2nd-parameter
 *
 * @param fn function needs to bind with arguments
 * @param boundArgs arguments will be bound at then end of the function interface
 * @returns new function with bindings
 */
export const bindTrailingArgs = ( fn: FunctionType, ...boundArgs: unknown[] ): FunctionType => {
    return function( ...args: unknown[] ): unknown {
        return fn( ...args, ...boundArgs );
    };
};

/**
 * Polyfill to match dynamic import result back to ES5 supported module
 *
 * @param obj - function to evaluate after loading the dependencies.
 * @returns ES5 module object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const interopES6Default = ( obj: any  ): any => {
    return obj && obj.__esModule && obj.default ? obj.default : obj;
};


/**
 * format dom node with indention
 * https://stackoverflow.com/questions/26360414/javascript-how-to-correct-indentation-in-html-string
 *
 * @param node DOM Node
 * @param level indention level
 * @returns element has been beautified
 */
const formatNode = ( node: Node, level = 0 ): Node => {
    /*
    var indentBefore = new Array( level++ + 1 ).join( '  ' );
        var indentAfter  = new Array( level - 1 ).join( '  ' );
        var textNode;
    */
    const tmpNode = ( level && node.parentNode ? node.parentNode : node ).cloneNode() as Element;
    tmpNode.innerHTML = `\n${BaseIndent.repeat( level + 1 )}<div></div>\n${BaseIndent.repeat( level )}`;
    const indentBefore = tmpNode.firstChild;
    const indentAfter = tmpNode.lastChild;

    let childCount = node.childNodes.length;
    if ( childCount > 0 && indentBefore && indentAfter ) {
        let idx = 0;
        while ( idx < childCount ) {
            const currNode = node.childNodes[idx];
            if ( currNode.nodeType === Node.ELEMENT_NODE ) {
                node.insertBefore( indentBefore.cloneNode(), currNode );
                formatNode( currNode, level + 1 );
                if ( node.lastChild === currNode ) {
                    node.appendChild( indentAfter.cloneNode() );
                    idx = childCount;
                } else {
                    idx += 2;
                    childCount++;
                }
            } else if ( currNode.nodeType === Node.TEXT_NODE ) {
                const textContent = ( currNode.nodeValue || '' ).trim();
                if ( textContent ) {
                    node.insertBefore( indentBefore.cloneNode(), currNode );
                    currNode.nodeValue = textContent;
                    if ( node.lastChild === currNode ) {
                        node.appendChild( indentAfter.cloneNode() );
                        idx = childCount;
                    } else {
                        idx += 2;
                        childCount++;
                    }
                } else {
                    currNode.nodeValue = textContent;
                    if ( node.lastChild === currNode ) {
                        node.appendChild( indentAfter.cloneNode() );
                    }
                    idx++;
                }
            } else {
                idx++;
            }
        }
    }
    return node;
};

/**
 * print dom node to string for display purpose
 * TODO:
 * - it may break <pre> tag for now, we can tune it later
 * - For text node with \n it is not handled correctly
 *
 * @param node DOM Node
 * @returns HTML as String
 */
export const printDomNode = ( node: Node | null ): string => {
    if ( !node ) {
        return '';
    }
    const elem = formatNode( node ) as Element;
    return elem.outerHTML;
};


/**
 * simple http get.
 *
 * @param theUrl url as string
 * @returns promise with response text
 */
export const httpGet = ( theUrl: string ): Promise<string> => {
    return new Promise( ( resolve, reject ) => {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function(): void {
            if ( xmlHttp.readyState === 4 && xmlHttp.status === 200 ) {
                resolve( xmlHttp.responseText );
            }
        };

        xmlHttp.onerror = function( e ): void {
            reject( e );
        };

        xmlHttp.open( 'GET', theUrl, true ); // true for asynchronous
        xmlHttp.send( null );
    } );
};

/**
 *
 * Returns Base URL for the current application
 *
 * @returns Base URL for the current application's root 'document' without any query or location attributes
 *          and (if otherwise valid) with a trailing '/' assured.
 */
export const getBaseURL: { (): string; _baseURL?: string } = () => {
    if ( !getBaseURL._baseURL ) {
        // strip 'index.html' from end of pathname if present
        const location = window.location;

        const pathname = location.pathname;

        // IE11 on Windows 10 doesn't have 'location.origin' object
        const origin = location.origin || location.protocol + '//' + location.hostname +
            ( location.port ? ':' + location.port : '' );

        getBaseURL._baseURL = origin + pathname.substring( 0, pathname.lastIndexOf( '/' ) + 1 );
    }

    return getBaseURL._baseURL;
};

/**
 * Check value type is primitive or not
 * @param val input value
 * @returns true if input is number or string
 */
export const isPrimitive = ( val: unknown ): boolean => {
    const type = typeof val;
    return type === 'number' || type === 'string' || type === 'boolean';
};

export const isArray = Array.isArray;

export const isObject = ( val: unknown ): boolean => Boolean(val) && !isPrimitive( val ) && !isArray( val );

//////////////////////////////////////////////////////////////
// data getter / setter
//////////////////////////////////////////////////////////////

/**
 * get value from scope
 *
 * @param scope scope for evaluation
 * @param path path to fetch faom scope
 * @returns value from specific path
 */
export const getValue = ( scope: Data, path: string ): Data => {
    // return _.get( scope, expr );
    // TODO: when the scope has .xxx, evalFunction will fail but _.get still success
    return evalExpression( path, scope, true ) as Data;
};

/**
 * applyValue to scope in immutable way
 * @param path path to set value as 'a.b.c'
 * @param value value to set
 * @param prev previous data store 
 * @returns immutable data store after update
 */
const applyValueInternal = (paths: string[], value: Value, prev: Data): Data => {
  if( paths.length === 0 ) {
    return prev;
  } else if( paths.length === 1 ) {
    const path = paths[0];
    return { ...prev, [path]: value };
  } else {
    const curr = ( prev[paths[0]] || {} ) as Data;
    return { ...prev, [paths[0]]: applyValueInternal(paths.slice(1), value, curr) };
  }
};

export const applyValue = ( path: string, value: Value, prev: Data ): Data => {
    return applyValueInternal(path.split('.'), value, prev);
}

/**
 * update data store in immutable way
 *
 * @param prev data store before update
 * @param values updates in key-value pair
 * @returns immutable data store after update
 */
export const applyValues = ( prev: Data, values: Data ): Data => {
    return Object.entries(values).reduce((prev, [path, value]): Data => {
      const prevValue = getValue(prev, path);
      return prevValue === value ? prev : applyValue(path, value, prev);
    }, prev);
};

/**
 * parse expr ${aa.bb}} to get aa.bb
 * @param str input string
 * @returns the expression inside ${}
 */
export const parseExpr = ( str: string ): string => {
    const match = str.match( /^{{(.*)}}$/ );
    return match ? match[1] : '';
};

/**
 * fastest way to copy a pure JSON object, use on your own risk
 * https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript
 *
 * @param input JSON object as input
 * @returns JSON object
 */
export const cloneJson = ( input: Data ): Data => {
    return input ? JSON.parse( JSON.stringify( input ) ) : input;
};

