import { registerLibDeps, ViewModelDefinition } from "@headless/core";

registerLibDeps('testLib', {
  updateEventData: (count: number) => count,
  updateCalculation: (propCount: number, eventCount: number) => propCount + eventCount,
});

export const EventExampleCorrectChildViewModel: ViewModelDefinition = {
  data: {
    count: 0,
    eventCount: 0,
  },
  actions: {
    updateEventData: {
      actionType: 'JSFunction',
      method: 'updateEventData',
      inputData: {
        'eventVal': '{{eventData.count}}',
      },
      outputData: {
        'eventCount': '',
      },
      deps: 'testLib',
    },
    updateCalculation: {
      actionType: 'JSFunction',
      method: 'updateCalculation',
      inputData: {
        'propCount': '{{props.count}}',
        'eventCount': '{{data.eventCount}}',
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
        action: 'updateEventData',
    }
  ],
  lifecycleHooks: {
    onUpdate: 'updateCalculation',
  }
}