import { ViewModelDefinition } from '@headless/types'
import { registerLibDeps } from "@headless/core";

registerLibDeps('js/EventExampleWrongChild', Promise.resolve({
  doubleValue: (propVal: number, eventVal: number) => propVal + eventVal,
}));

export const EventExampleWrongChildViewModel: ViewModelDefinition = {
  name: 'EventExampleWrongChild',
  data: {
    count: 0,
  },
  actions: {
    doubleValue: {
      actionType: 'JSFunction',
      method: 'doubleValue',
      inputData: {
        'propVal': '{{props.count}}',
        'eventVal': '{{eventData.count}}',
      },
      outputData: {
        'count': '',
      },
      deps: 'js/EventExampleWrongChild',
    },
  },
  onEvent: [
    {
        eventId: 'sendToChildren',
        action: 'doubleValue',
    }
  ],
  view: `
    <div class="card">
      Process "PropData + EventData" in Action: {{data.count}}
    </div>
  `
}