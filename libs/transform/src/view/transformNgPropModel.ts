/**
 * Text Node transformer
 */
import { NodeType } from '@headless/utils';
import { generateUpdateVmPropFunction } from './transformUtils';
import { ViewTransformContext, ViewTransformResult } from './types';

const Attr = 'ng-prop-model';

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
  const expr = node.getAttribute(Attr) || '';

  // TODO: maybe we should clone node here
  node.removeAttribute(Attr);

  // https://reactjs.org/docs/forms.html
  const type = node.getAttribute('type');
  const attr = type === 'checkbox' ? 'checked' : 'value';
  const value = type === 'checkbox' ? 'e.target.checked' : 'e.target.value';
  if (/^(ctx|data)[.[]/.test(expr)) {
    node.setAttribute(attr, `{{${expr}.uiValue}}`);
    node.setAttribute(
      'onchange',
      `{{function(e){vm.dispatch({ scope: '${expr}', value: { 'uiValue': ${value}, 'dirty': true, error: vm.validate(${value}, ${expr})} })}}}`
    );
  } else {
    node.setAttribute(attr, `{{${expr}.uiValue}}`);
    node.setAttribute(
      'onchange',
      `{{function(e){${generateUpdateVmPropFunction(expr, value)}}}}`
    );
  }

  return context.transformFn(node, context);
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
  const expr = node.getAttribute(Attr) || '';

  // TODO: maybe we should clone node here
  node.removeAttribute(Attr);

  // https://reactjs.org/docs/forms.html
  const type = node.getAttribute('type');
  const attr = type === 'checkbox' ? 'checked' : 'value';
  const value = type === 'checkbox' ? 'e.target.checked' : 'e.target.value';
  if (/^(ctx|data)\./.test(expr)) {
    node.setAttribute(attr, `{{${expr}.uiValue}}`);
    node.setAttribute(
      'onchange',
      `{{e => vm.dispatch({ scope: '${expr}', value: { 'uiValue': ${value}, 'dirty': true, error: vm.validate(${value}, ${expr})} })}}`
    );
  } else {
    node.setAttribute(attr, `{{${expr}.uiValue}}`);
    node.setAttribute(
      'onchange',
      `{{e => ${generateUpdateVmPropFunction(expr, value)}}}`
    );
  }

  return context.transformFn(node, context);
}

export default {
  when,
  transform,
  transformToTemplate,
};
