import { Value, Data, Store, Action } from './types';
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
export const evalDataDefinition = (
  input: Data,
  scope: Data
): Data => {
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
        resultPath?.length > 0
          ? getValue(result as Data, resultPath)
          : result,
    };
  }, {} as Data);
};

/**
 * Create action function from action definition
 *
 * @param actionDef action definition
 * @param store data state
 * @returns void function call back to execute the action
 */
export const createActionFn = (
  actionDef: Data,
  store: Store,
  getProps: () => Record<string, unknown>
): Action => {
  return async (eventData: Data) => {
    // load deps
    const actionFn = getLibDeps(actionDef.deps as string)[
      actionDef.method as string
    ];

    // load input data
    const data = store.getData();
    const inputData = evalDataDefinition(actionDef.inputData as Data, { data, props: getProps() as Value, eventData });

    // execute action
    const result = await actionFn(...Object.values(inputData)) as number;

    // update output data
    const outputData = evalOutputData((actionDef.outputData || {}) as Record<string, string>, result);
    store.updateData(outputData);
  };
};

export const initActions = ( actionsDef: Data, 
  store: Store,   getProps: () => Record<string, unknown>): Record<string, Action> => {
    return Object.entries(actionsDef).reduce((prev, [actionName, actionDef]) => {
      return {
        ...prev,
        [actionName]: createActionFn(
          actionDef as Data,
          store,
          getProps,
        ),
      };
    }, {});
  };