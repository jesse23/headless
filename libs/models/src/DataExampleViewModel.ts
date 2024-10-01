import { registerLibDeps, ViewModelDefinition } from "@headless/core";

registerLibDeps('js/DataExampleService', Promise.resolve({
  increment: (x: number) => x + 1,
}));

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
        'count': '{{data.count}}',
      },
      outputData: {
        'count': '',
      },
      deps: 'js/DataExampleService',
    }
  },
};