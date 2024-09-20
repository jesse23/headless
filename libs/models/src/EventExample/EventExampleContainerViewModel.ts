import { registerLibDeps, ViewModelDefinition } from '@headless/core';
import { eventBus } from '@headless/ops';

registerLibDeps('testLib', {
  incrementAndPublish: (x: number) => {
    const res = x + 1;
    eventBus.publish({
      topic: 'sendToChildren',
      payload: {
        count: res,
      },
    });
    return res;
  },
});

export const EventExampleContainerViewModel: ViewModelDefinition = {
  data: {
    count: 0,
  },
  actions: {
    incrementAndPublish: {
      actionType: 'JSFunction',
      method: 'incrementAndPublish',
      inputData: {
        count: '{{data.count}}',
      },
      outputData: {
        count: '',
      },
      deps: 'testLib',
    },
  },
};
