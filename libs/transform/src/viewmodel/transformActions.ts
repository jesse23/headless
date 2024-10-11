import { ActionDefinition } from '@headless/types';
import { BaseIndent } from '../view/transformUtils';

export const transformActions = (
  actions: Record<string, ActionDefinition>,
  context
): {
  result: string[];
  actionFnMap: Record<string, string[]>;
} => {
  const level = context.level !== undefined ? context.level : 0;
  const indent = BaseIndent.repeat(level);
  const childIndent = BaseIndent.repeat(level + 1);
  const result = [];

  result.push(`${indent}{`);

  const actionFnMap = Object.entries(actions).reduce(
    (prev, [actionName, actionDef]) => {
      const ACTION_FN_TEMPLATE = `
async function( data, props, eventData ) {
  const inputData = evalDataDefinition(${JSON.stringify(
    actionDef.inputData
  )}, { data, props, eventData }); 
  const result = await ${actionDef.method}(...Object.values(inputData));
  return evalOutputData(${JSON.stringify(actionDef.outputData)}, result);
}
      `.split('\n');
      return {
        ...prev,
        [actionName]: ACTION_FN_TEMPLATE,
      };
    },
    {} as Record<string, string[]>
  );

  Object.entries(actionFnMap).forEach(([actionName, actionFn]) => {
    result.push(
      `${childIndent}${actionName}: ${actionFn
        .map((line) => `${childIndent}${line}`)
        .join('\n')
        .trim()},`
    );
  });

  result.push(`${indent}}`);

  return {
    result,
    actionFnMap,
  };
};
