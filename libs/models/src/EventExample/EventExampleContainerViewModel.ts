import { registerLibDeps, ViewModelDefinition } from '@headless/core';
import { eventBus } from '@headless/ops';

registerLibDeps('js/EventExampleContainerService', Promise.resolve({
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
}));

export const EventExampleContainerViewModel: ViewModelDefinition = {
  name: 'EventExampleContainer',
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
      deps: 'js/EventExampleContainerService',
    },
  },
};
