import { Component, ViewModelDefinition } from '@headless/core';
import { defineComponentDecl } from '@headless/react';

const _mockViewStore: Record<string, ViewModelDefinition> = {
  RemoteExample: {
    schemaVersion: '1.0.0',
    name: 'RemoteExample',
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
const getComponent = async (viewName: string, _: unknown): Promise<Component> => {
  const viewDefinition = (await Promise.resolve(_mockViewStore[viewName] || null)) as ViewModelDefinition;
  if (!viewDefinition) {
    throw new Error(`View not found: ${viewName}`);
  } else {
    return defineComponentDecl(viewDefinition);
  }
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
  getComponent,
  updateView,
  listViews,
};
