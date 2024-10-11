import { BaseIndent } from '../view/transformUtils';

export const transformSubscriptions = (
  onEvent: {
    eventId: string;
    action: string;
    condition?: string;
  }[],
  context
): string[] => {
  const level = context.level !== undefined ? context.level : 0;
  const indent = BaseIndent.repeat(level);
  const childIndent = BaseIndent.repeat(level + 1);
  const result = [];

  const actionFnMap = context.actionFnMap;

  result.push(`[`);
  onEvent.forEach(({ eventId, action, condition }) => {
    const subIndent = BaseIndent.repeat(level + 2);
    result.push(`${childIndent}{`);
    result.push(`${subIndent}eventId: '${eventId}',`);
    result.push(
      `${subIndent}action: ${actionFnMap[action]
        .map((line) => `${subIndent}${line}`)
        .join('\n')
        .trim()},`
    );
    result.push(
      `${subIndent}condition: function(data, props, eventData) {`,
      `${subIndent}  return ${condition};`,
      `${subIndent}},`
    );
    result.push(`${childIndent}},`);
  });
  result.push(`${indent}]`);

  // result.push(JSON.stringify(onEvent));

  return result;
};
