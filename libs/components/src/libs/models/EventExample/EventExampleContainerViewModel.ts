import { ViewModelDefinition } from '@headless/types'
import { registerLibDeps } from '@headless/core';
import { eventBus } from '@headless/interop';

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
  imports: [
    'EventExampleWrongChild',
    'EventExampleCorrectChild',
  ],
  view: `
<div class="card">
  <h2>Event Example</h2>
  <div>count is {{data.count}}</div>
  <button type="button" onclick="{{actions.incrementAndPublish}}">
    +1 and publish
  </button>
  <event-example-wrong-child count="{{data.count}}"></event-example-wrong-child>
  <event-example-correct-child count="{{data.count}}"></event-example-correct-child>
</div>
  `
};
