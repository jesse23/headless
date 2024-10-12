import { BASE_INDENT } from '@headless/utils';

export const transformLifeCycleHooks = (
  hooks: Record<string, string>,
  context
): string[] => {
  const level = context.level !== undefined ? context.level : 0;
  const indent = BASE_INDENT.repeat(level);
  const childIndent = BASE_INDENT.repeat(level + 1);
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
