import { ViewModelDefinition } from '@headless/core';

const _mockViewStore: Record<string, ViewModelDefinition> = {
  RemoteExample: {
    schemaVersion: '1.0.0',
    data: {
      currValue: 0,
    },
    actions: {
      plus: {
        actionType: 'JSFunction',
        method: 'execute',
        inputData: {
          expr: 'value + 1',
          scope: {
            value: '{{data.currValue}}',
          },
        },
        outputData: {
          currValue: '',
        },
        deps: 'js/buttonExampleService',
      },
    },
    view: `
<h5>Remote View</h5>
<div>Count: {{data.currValue}}</div>
<simple-button action="{{actions.plus}}">+1</simple-button>
        `,
    imports: ['SimpleButton'],
  },
};

const updateView = (viewName: string, viewDef: ViewModelDefinition) => {
  _mockViewStore[viewName] = viewDef;
};

/**
 * get View
 * @param viewName  name of the view
 */
const getView = (viewName: string, _: unknown): ViewModelDefinition => {
  return _mockViewStore[viewName] || {};
};

/**
 * get list of views
 *
 * @returns list of views
 */
const listViews = (): string[] => {
  return Object.keys(_mockViewStore);
};

/**
 * update View
 */
export const mockViewStore = {
  getView,
  updateView,
  listViews,
};
