import { registerLibDeps, ViewModelDefinition } from "@headless/core";

registerLibDeps('testLib', {
  doubleValue: (propVal: number, eventVal: number) => propVal + eventVal,
});

export const EventExampleWrongChildViewModel: ViewModelDefinition = {
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
      deps: 'testLib',
    },
  },
  onEvent: [
    {
        eventId: 'sendToChildren',
        action: 'doubleValue',
    }
  ]
}