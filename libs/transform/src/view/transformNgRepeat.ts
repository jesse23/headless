import { NodeType, BASE_INDENT, hyphenToCamelCase } from '@headless/utils';
import { ViewTransformContext, ViewTransformResult } from './types';

const Attr = 'ng-repeat';

/**
 * Evaluate condition for current transformer
 * @param node input DOM Node
 * @param context input context
 * @returns true if condition matches
 */
function when(node: HTMLElement, _: ViewTransformContext): boolean {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr);
}

/**
 * transform view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns transform output
 */
function transform(
  node: HTMLElement,
  context: ViewTransformContext
): ViewTransformResult | undefined {
  // process indent
  let contents = [];
  const indent = BASE_INDENT.repeat(context.level);
  const childIndent = BASE_INDENT.repeat(context.level + 1);
  // indent in text node will add noise
  const expr = node.getAttribute(Attr) || '';

  // TODO: maybe we should clone node here
  node.removeAttribute(Attr);
  node.setAttribute('key', '{{index}}');

  // TODO: very naive
  const match = expr.match(/^(.*\S)(\s+in\s+|\s*:\s*)(\S.*)$/);
  if (match) {
    const varExpr = match[1];
    const setExpr = match[3];

    // delegate updateProp
    let updatePropExpr = '';
    if (/^(ctx|data)\./.test(setExpr)) {
      updatePropExpr = `vm.getDispatch( \`${setExpr}['\${key}']\` )`;
    } else if (/^[A-Za-z]/.test(setExpr)) {
      // TODO: we can do better at identifying setExpr by:
      // - if it is from prop, do updateProp
      // - if it is from parent set, do setExpr.setValue
      // - other case is not supportted.
      /*
            updatePropExpr = `vm.getDispatch( \`${setExpr}['\${key}']\`, ${generateUpdatePropFunction( setExpr )} )`;
            */
    }
    contents.push(`${indent}processRepeat(${setExpr}, function( key ) {`);
    if (updatePropExpr) {
      contents.push(`${childIndent}return ${updatePropExpr};`);
    }
    contents.push(`${indent}}, function( ${varExpr}, index ) {`);

    // This is still needed for double for case
    if (updatePropExpr) {
      contents.push(
        `${childIndent}const update${hyphenToCamelCase(
          varExpr
        )} = ${varExpr}.dispatch;`
      );
    }

    // slot scope
    contents.push(`${childIndent}slotScope.${varExpr} = ${varExpr};`);

    const childRes = context.transformFn(node, {
      ...context,
      level: context.level + 1,
      index: 0,
    });

    if (childRes) {
      // add return
      childRes.contents[0] = childRes.contents[0].replace(
        /^(\s+)/,
        '$1return '
      );
      contents = contents.concat(childRes.contents);
      contents[contents.length - 1] = contents[contents.length - 1].replace(
        /,$/,
        ';'
      );
      contents.push(`${indent}} )${context.level ? ',' : ''}`);

      return {
        ...childRes,
        contents,
      };
    }
  }
}

/**
 * transform view input to target framework format
 * @param node input DOM Node
 * @param context input context
 * @returns transform output
 */
function transformToTemplate(
  node: HTMLElement,
  context: ViewTransformContext
): ViewTransformResult | undefined {
  // process indent
  let contents = [];
  const indent = BASE_INDENT.repeat(context.level);
  const childIndent = BASE_INDENT.repeat(context.level + 1);
  // indent in text node will add noise
  const expr = node.getAttribute(Attr) || '';

  // TODO: maybe we should clone node here
  node.removeAttribute(Attr);
  node.setAttribute('key', '{{index}}');

  // TODO: very naive
  const match = expr.match(/^(.*\S)\s+in\s+(\S.*)$/);
  if (match) {
    const varExpr = match[1];
    const setExpr = match[2];
    // TODO: need to support object/map later
    const isJsxCtx = context.context === 'JSX';

    // delegate updateProp
    let updatePropExpr = '';
    if (/^(ctx|data)([.[]|$)/.test(setExpr)) {
      updatePropExpr = `vm.getDispatch( \`${setExpr}['\${key}']\` )`;
    } /*else if( /^[A-Za-z]/.test( setExpr ) ) {
            // TODO: we can do better at identifying setExpr by:
            // - if it is from prop, do updateProp
            // - if it is from parent set, do setExpr.setValue
            // - other case is not supportted.
            updatePropExpr = `vm.getDispatch( \`${setExpr}['\${key}']\`, ${generateUpdatePropFunction( setExpr )} )`;
        }*/

    contents.push(
      `${indent}${isJsxCtx ? '{ ' : ''}processRepeat(${setExpr}, key => {`
    );
    if (updatePropExpr) {
      contents.push(`${childIndent}return ${updatePropExpr};`);
    }
    contents.push(`${indent}}, ( ${varExpr}, index ) => {`);

    // This is still needed for double for case
    if (updatePropExpr) {
      contents.push(
        `${childIndent}const update${hyphenToCamelCase(
          varExpr
        )} = ${varExpr}.dispatch;`
      );
    }

    // slot scope
    contents.push(`${childIndent}slotScope.${varExpr} = ${varExpr};`);

    const childRes = context.transformFn(node, {
      ...context,
      level: context.level + 2,
      index: 0,
      context: 'JS',
    });

    if (childRes) {
      // add return
      contents.push(`${childIndent}return (`);
      contents = contents.concat(childRes.contents);
      contents.push(`${childIndent});`);
      contents.push(`${indent}} )${isJsxCtx ? ' }' : ''}`);

      return {
        ...childRes,
        contents,
      };
    }
  }
}

export default {
  when,
  transform,
  transformToTemplate,
};
