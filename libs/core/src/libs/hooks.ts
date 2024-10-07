import { Action, ViewModelDefinition } from '@headless/types';

export const execLifecycleHook = async (
  viewDef: ViewModelDefinition,
  actions: Record<string, Action>,
  lifecycle: string
) => {
  const lifecycleDef = viewDef.lifecycleHooks?.[lifecycle] || '';
  if (lifecycleDef) {
    const action = actions[lifecycleDef];
    if (action) {
      await action();
    } else {
      console.warn(`action ${lifecycleDef} not found in actions`);
    }
  }
};
