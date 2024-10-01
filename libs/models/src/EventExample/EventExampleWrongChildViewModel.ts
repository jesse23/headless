import { registerLibDeps, ViewModelDefinition } from "@headless/core";

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
  ]
}