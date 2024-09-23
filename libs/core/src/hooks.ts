import { Action, ViewModelDefinition } from './types';

export const execLifecycleHook = async (
  viewDef: ViewModelDefinition,
  actions: Record<string, Action>,
  lifecycle: string
) => {
  const lifecycleDef = viewDef.lifecycleHooks?.[lifecycle] || '';
  if (lifecycleDef) {
    const actionFn = actions[lifecycleDef];
    if (actionFn) {
      await actionFn();
    } else {
      console.warn(`action ${lifecycleDef} not found in actions`);
    }
  }
};
