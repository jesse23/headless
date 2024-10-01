import { Value, Data, Store, Action, ActionFn } from './types';
import { cloneJson, getValue, parseExpr } from './utils';
import { getLibDeps } from './deps';

/**
 * Evaluate data definition to store in mutable way
 *
 * @param input data definition as input
 * @param scope store object
 * @param level current level in the recursive evaluation
 * @returns void
 */
const evalDataDefinitionInternal = (
  input: Value,
  scope: Data,
  level: number
): void => {
  if (Array.isArray(input)) {
    for (const key in input) {
      const value = input[key];
      if (typeof value === 'string') {
        const template = parseExpr(value);
        if (template) {
          input[key] = getValue(scope, template);
        }
      } else {
        evalDataDefinitionInternal(value, scope, level + 1);
      }
    }
  } else if (typeof input === 'object') {
    for (const key in input) {
      const value = input[key];
      if (typeof value === 'string') {
        const template = parseExpr(value);
        if (template) {
          input[key] = getValue(scope, template);
        }
      } else {
        evalDataDefinitionInternal(value, scope, level + 1);
      }
    }
  }
};

/**
 * Evaluate from data definition like:
 * {
 *   attr1: {{data.curVal}}
 * }
 * to actual value in scope like:
 * {
 *   attr1: 3
 * }
 *
 * @param input data definition
 * @param scope scope for evaluation
 * @param level used for recursive call internally
 * @returns evaluated input object
 */
export const evalDataDefinition = (input: Data, scope: Data): Data => {
  // Make the method to be immutable at top level
  const store = cloneJson(input);

  evalDataDefinitionInternal(store, scope, 0);

  return store;
};

/**
 * evaluate output data definition
 *
 * @param outputData output data definition
 * @param result function result
 * @returns evaluated output data values
 */
export const evalOutputData = (
  outputData: Record<string, string>,
  result: Value
): Data => {
  return Object.entries(outputData).reduce((prev, [path, resultPath]) => {
    return {
      ...prev,
      [path]:
        resultPath?.length > 0 ? getValue(result as Data, resultPath) : result,
    };
  }, {} as Data);
};

export const createActionFn = (actionDef: Data): ActionFn => {
  const actionFn: ActionFn = async (data, props, eventData) => {
    // load deps
    const fn = (await getLibDeps(actionDef.deps as string))[
      actionDef.method as string
    ];

    const inputData = evalDataDefinition(actionDef.inputData as Data, {
      data,
      props: props as Value,
      eventData,
    });

    // execute action
    const result = (await fn(...Object.values(inputData))) as Data;

    return evalOutputData(
      actionDef.outputData as Record<string, string>,
      result
    );
  };

  return actionFn;
};

export const createActionFromActionFn = (
  actionFn: ActionFn,
  store: Store,
  getProps: () => Record<string, unknown>
): Action => {
  return async (eventData: Data) => {
    const res = await actionFn(store.getData(), getProps(), eventData);
    if (res) {
      store.updateData(res);
    }
  };
};

/**
 * Create action function from action definition
 *
 * @param actionDef action definition
 * @param store data state
 * @returns void function call back to execute the action
 */
const createAction = (
  actionDef: Data,
  store: Store,
  getProps: () => Record<string, unknown>
): Action => {
  return createActionFromActionFn(createActionFn(actionDef), store, getProps);
};

export const initActions = (
  actionsDef: Data,
  store: Store,
  getProps: () => Record<string, unknown>
): Record<string, Action> => {
  return Object.entries(actionsDef).reduce((prev, [actionName, actionDef]) => {
    return {
      ...prev,
      [actionName]: createAction(actionDef as Data, store, getProps),
    };
  }, {});
};

export const initActionsFromActionFn = (
  actionFnMap: Record<string, ActionFn>,
  store: Store,
  getProps: () => Record<string, unknown>
): Record<string, Action> => {
  return Object.entries(actionFnMap).reduce((prev, [actionName, actionFn]) => {
    return {
      ...prev,
      [actionName]: createActionFromActionFn(actionFn, store, getProps),
    };
  }, {});
};
