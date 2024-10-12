import { ViewModelDefinition } from '@headless/types';
import { BASE_INDENT } from '@headless/utils';

import { transformLifeCycleHooks } from './transformLifeCycleHooks';
import { transformSubscriptions } from './transformSubscriptions';
import { transformActions } from './transformActions';

export const transform = (vmDef: ViewModelDefinition, context): string[] => {
  const level = context.level !== undefined ? context.level : 0;
  const indent = BASE_INDENT.repeat(level);
  const childIndent = BASE_INDENT.repeat(level + 1);
  const result = [];

  result.push(`${indent}{`);

  // name
  result.push(`${childIndent}name: '${vmDef.name}',`);

  // data
  if (vmDef.data) {
    result.push(`${childIndent}data: ${JSON.stringify(vmDef.data)},`);
  }

  // actions
  const { result: actionResult, actionFnMap } = transformActions(vmDef.actions, {
    level: level + 1,
  });
  if (vmDef.actions) {
    result.push(`${childIndent}actions: ${actionResult.join('\n').trim()},`);
  }

  // lifecycleHooks
  if (vmDef.lifecycleHooks) {
    result.push(
      `${childIndent}lifecycleHooks: ${transformLifeCycleHooks(
        vmDef.lifecycleHooks,
        {
          level: level + 1,
          actionFnMap,
        }
      ).join('\n')},`
    );
  }

  // onEvent
  if (vmDef.onEvent) {
    result.push(
      `${childIndent}onEvent2: ${transformSubscriptions(vmDef.onEvent, {
        level: level + 1,
        actionFnMap,
      }).join('\n')},`
    );
  }

  // imports
  if (vmDef.imports) {
    result.push(`${childIndent}imports: ${JSON.stringify(vmDef.imports)},`);
  }

  result.push(`${indent}}`);

  return result;
};
