/**
 * Node Compiler
 */
import { BaseIndent, NodeType, ReactAttr } from './compileUtils';

import { hyphenToCamelCase } from './compileUtils';
import { CompileContext, CompileResult } from './types';

/**
 * Evaluate condition for current compiler
 * @param node input DOM Node
 * @param context input context
 * @returns true if condition matches
 */
function when(node: HTMLElement, _: CompileContext): boolean {
  return node.nodeType === NodeType.ELEMENT_NODE;
}

/**
 * Compile view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns compile output
 */
function compile(
  node: HTMLElement,
  context: CompileContext
): CompileResult | undefined {
  let contents = [];
  let currLine = [];
  let deps = {};
  let options = {};
  let partialStore = {} as Record<string, boolean>;

  const elem = node;
  const viewImports = context.deps || {};
  const level = context.level !== undefined ? context.level : 0;
  const index = context.index;
  const indent = BaseIndent.repeat(level);

  // process tag
  let elemName = elem.nodeName.toLowerCase();
  let compiledType = null;
  let viewDesc = null;
  if (/^\S+-\S+$/.test(elemName)) {
    const compName = hyphenToCamelCase(elemName);
    if (viewImports[compName]) {
      compiledType = compName;
      viewDesc = viewImports[compName];
    }
  }

  currLine.push(
    `${indent}${compiledType ? `${compiledType} && ` : ''}createElement( ${
      compiledType ? compiledType : `"${elemName}"`
    }`
  );
  elemName = compiledType ? compiledType : elemName;

  // process attribute
  const attrLenth = elem.attributes.length || 0;
  const classLength = elem.classList.length || 0;
  if (attrLenth + classLength > 0 || index !== undefined) {
    // procuss attribute begin
    const attrIndent = '  '.repeat(level + 1);
    currLine.push(', {');
    contents.push(currLine.join(''));

    // key
    // Skip to use array children
    /*
    if (index !== undefined && !node.hasAttribute('key')) {
      // Key
      contents.push(`${attrIndent}"key": ${index},`);
    }
    */

    // 20200713: temp hack for parent vm to support coexist
    // contents.push( `${attrIndent}"_parent": vm,` );

    for (let i = 0; i < attrLenth; i++) {
      let name = elem.attributes[i].name;
      const value = elem.attributes[i].value;
      // process react attribute map
      name = ReactAttr[name] ? ReactAttr[name] : name;

      // TODO: very naive variable parsing
      // let match = value.match( /^{{(.*)}}$/m );
      const matchDoubleCurly = value.startsWith('{{') && value.endsWith('}}');
      const matchSingleCurly = value.startsWith('{') && value.endsWith('}');
      if (matchDoubleCurly) {
        contents.push(
          `${attrIndent}"${name}": ${value.substring(2, value.length - 2)},`
        );
      } else if (matchSingleCurly) {
        // partial store
        const path = value
          .substring(1, value.length - 1);
          partialStore[path] = true;
          contents.push(
            `${attrIndent}"${name}": ${path.replace(/\./g,'_')},`
          );
      } else {
        contents.push(`${attrIndent}"${name}": "${value}",`);
      }
    }

    // process class list
    /*
        if( classLength > 0 ) {
            // TODO: do nothing for now, copy code from next else
            const value = elem.classList.value;
            let match = value.match( /^{{(.*)}}$/ );
            if( match ) {
                contents.push( `${attrIndent}"className": ${match[1]},` );
            } else {
                contents.push( `${attrIndent}"className": "${value}",` );
            }
        }
        */

    contents[contents.length - 1] = contents[contents.length - 1].replace(
      /,$/,
      ''
    );

    // attr end
    currLine = [`${indent}}`];
  } else {
    currLine.push(', null');
  }

  // process children
  const childLength = elem.childNodes.length;
  if (childLength > 0) {
    const childCompileResults = [];
    for (let i = 0; i < childLength; i++) {
      const childDomNode = elem.childNodes[i];
      const childRes = context.compileFn(childDomNode, {
        ...context,
        level: level + 1,
        index: i,
      });

      if (childRes) {
        childCompileResults.push(childRes);
      }
    }

    if (childCompileResults.length > 0) {
      // TODO: simple one level impl. For multiple level like:
      // <ng-list>
      //   <ng-list>
      //     {item.name}
      //   </ng-list>
      // </ng-list>
      // We need to flatten the object, save it as a top level variable
      if (viewDesc && viewDesc.scopeSlot) {
        const childIndent = BaseIndent.repeat(level + 1);
        const funcIndent = BaseIndent.repeat(level + 2);
        currLine.push(', {');
        contents.push(currLine.join(''));
        contents.push(`${childIndent}eval: function(scope){`);
        contents.push(`${funcIndent}return evalExpression(\`[`);
        for (let i = 0; i < childCompileResults.length; i++) {
          const childRes = childCompileResults[i];
          // escape text node.
          contents = contents.concat(
            childRes.contents.map((c: string) => {
              const match = c.match(/^(\s+)"(.*)",$/);
              if (match) {
                return `${match[1]}${JSON.stringify(match[2])},`;
              }
              return c;
            })
          );
          deps = Object.assign(deps, childRes.deps);
        }

        // trim last comma
        contents[contents.length - 1] = contents[contents.length - 1].replace(
          /,$/,
          ']`, scope, true);'
        );
        contents.push(`${childIndent}},`);
        contents.push(`${childIndent}scope: viewDeps`);
        currLine = [`${indent}}`];
      } else {
        // begin
        // Skip to use array children
        // currLine.push(', [');
        currLine.push(', ');
        contents.push(currLine.join(''));

        for (let i = 0; i < childCompileResults.length; i++) {
          const childRes = childCompileResults[i];
          contents = contents.concat(childRes.contents);
          deps = Object.assign(deps, childRes.deps);
          options = Object.assign(options, childRes.options);
          partialStore = Object.assign(partialStore, childRes.partialStore);
        }

        // trim last comma
        contents[contents.length - 1] = contents[contents.length - 1].replace(
          /,$/,
          ''
        );

        // end
        // Skip to use array children
        // currLine = [`${indent}]`];
        currLine = [`${indent}`];
      }
    }
  }
  currLine.push(' )');

  // last comma for children
  if (level > 0) {
    currLine.push(',');
  }

  contents.push(currLine.join(''));

  return {
    contents,
    deps,
    options,
    partialStore,
  };
}

/**
 * Compile view input to JSX
 * @param node input DOM Node
 * @param context input context
 * @returns compile output
 */
function compileToTemplate(node: HTMLElement, context: CompileContext) {
  let contents = [];
  const currLine = [];
  let deps = {};
  let options = {};
  let partialStore = {} as Record<string, boolean>;

  const elem = node;
  const viewImports = context.deps || {};
  const level = context.level !== undefined ? context.level : 0;
  const index = context.index;
  const indent = BaseIndent.repeat(level);

  // process tag
  let elemName = elem.nodeName.toLowerCase();
  let compiledType = null;
  let viewDesc = null;
  if (/^\S+-\S+$/.test(elemName)) {
    const compName = hyphenToCamelCase(elemName);
    if (viewImports[compName]) {
      compiledType = compName;
      viewDesc = viewImports[compName];
    }
  }

  currLine.push(`${indent}<${compiledType ? compiledType : elemName}`);
  elemName = compiledType ? compiledType : elemName;

  // process attribute
  const attrLenth = elem.attributes.length || 0;
  const classLength = elem.classList.length || 0;
  if (attrLenth + classLength > 0 || index !== undefined) {
    for (let i = 0; i < attrLenth; i++) {
      let name = elem.attributes[i].name;
      const value = elem.attributes[i].value;

      // process react attribute map
      name = ReactAttr[name] ? ReactAttr[name] : name;

      // TODO: very naive variable parsing
      const matchDoubleCurly = value.startsWith('{{') && value.endsWith('}}');
      const matchSingleCurly = value.startsWith('{') && value.endsWith('}');
      if (matchDoubleCurly) {
        currLine.push(`${name}={${value.substr(2, value.length - 4)}}`);
      } else if (matchSingleCurly) {
        // partial store
        const path = value
          .substring(1, value.length - 1)
        partialStore[path] = true;
        currLine.push(`${name}={${path.replace(/\./g, '_')}}`);
        
      } else {
        currLine.push(`${name}="${value}"`);
      }
    }

    // process class list
    /*
        if( classLength > 0 ) {
            // TODO: do nothing for now, copy code from next else
            const value = elem.classList.value;
            let match = value.match( /^{{(.*)}}$/ );
            if( match ) {
                currLine.push( `className={${match[1]}}` );
            } else {
                currLine.push( `className="${value}"` );
            }
        }
        */
  }
  contents.push(currLine.join(' ') + '>');

  // process children
  const childLength = elem.childNodes.length;
  if (childLength > 0) {
    const childCompileResults = [];
    for (let i = 0; i < childLength; i++) {
      const childDomNode = elem.childNodes[i];
      const childRes = context.compileFn(childDomNode, {
        ...context,
        level: level + 1,
        index: i,
        toTemplate: !(viewDesc && viewDesc.scopeSlot),
        context: 'JSX',
      });

      if (childRes) {
        childCompileResults.push(childRes);
      }
    }

    if (childCompileResults.length > 0) {
      // TODO: simple one level impl. For multiple level like:
      // <ng-list>
      //   <ng-list>
      //     {item.name}
      //   </ng-list>
      // </ng-list>
      // We need to flatten the object, save it as a top level variable
      if (viewDesc && viewDesc.scopeSlot) {
        const childIndent = BaseIndent.repeat(level + 1);
        const funcIndent = BaseIndent.repeat(level + 2);
        // currLine.push( ', {' );
        contents.push(`${childIndent}{ {`);
        contents.push(`${childIndent}eval: function(scope){`);
        contents.push(`${funcIndent}return evalExpression(\`[`);
        for (let i = 0; i < childCompileResults.length; i++) {
          const childRes = childCompileResults[i];
          // escape text node.
          contents = contents.concat(
            childRes.contents.map((c: string) => {
              const match = c.match(/^(\s+)"(.*)",$/);
              if (match) {
                return `${match[1]}${JSON.stringify(match[2])},`;
              }
              return c;
            })
          );
          deps = Object.assign(deps, childRes.deps);
        }

        // trim last comma
        contents[contents.length - 1] = contents[contents.length - 1].replace(
          /,$/,
          ']`, scope, true);'
        );
        contents.push(`${childIndent}},`);
        contents.push(`${childIndent}scope: viewDeps`);
        contents.push(`${childIndent}} }`);
      } else {
        for (let i = 0; i < childCompileResults.length; i++) {
          const childRes = childCompileResults[i];
          contents = contents.concat(childRes.contents);
          deps = { ...deps, ...childRes.deps };
          options = { ...options, ...childRes.options };
          partialStore = { ...partialStore, ...childRes.partialStore };
        }
      }
    }
  }
  // end tag
  contents.push(`${indent}</${elemName}>`);

  return {
    contents,
    deps,
    options,
    partialStore,
  };
}

export default {
  when,
  compile,
  compileToTemplate,
};
