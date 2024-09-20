import { registerLibDeps, ViewModelDefinition } from "@headless/core";

registerLibDeps('testLib', {
  increment: (x: number) => x + 1,
});

export const DataExampleViewModel: ViewModelDefinition = {
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
      deps: 'testLib',
    }
  },
};