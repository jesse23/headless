import { ViewModelDefinition } from '@headless/types';
import { registerLibDeps } from '@headless/core';

registerLibDeps(
  'js/DataExampleService',
  Promise.resolve({
    increment: (x: number) => {
      return x + 1;
    },
  })
);

export const DataExampleViewModel: ViewModelDefinition = {
  name: 'DataExample',
  data: {
    count: 0,
  },
  actions: {
    increment: {
      actionType: 'JSFunction',
      method: 'increment',
      inputData: {
        count: '{{data.count}}',
      },
      outputData: {
        count: '',
      },
      deps: 'js/DataExampleService',
    },
  },
  onEvent: [
    {
      eventId: 'notifyUpdateComponentDeclExample',
      action: 'notifyUpdateAction',
      condition: 'data.count > 5',
    },
  ],
  view: `
    <div class="card">
      <h2>Data Example</h2>
      <button type="button" onclick="{{actions.increment}}">
        count is {{data.count}}
      </button>
    </div>
  `,
};
