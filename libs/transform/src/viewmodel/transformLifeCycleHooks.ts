import { BaseIndent } from '../view/transformUtils';

export const transformLifeCycleHooks = (
  hooks: Record<string, string>,
  context
): string[] => {
  const level = context.level !== undefined ? context.level : 0;
  const indent = BaseIndent.repeat(level);
  const childIndent = BaseIndent.repeat(level + 1);
  const result = [];

  const actionFnMap = context.actionFnMap;

  result.push(`{`);
  Object.entries(hooks).forEach(([hookName, actionName]) => {
    result.push(
      `${childIndent}${hookName}: ${actionFnMap[actionName]
        .map((line) => `${childIndent}${line}`)
        .join('\n')
        .trim()},`
    );
  });
  result.push(`${indent}}`);

  return result;
};
