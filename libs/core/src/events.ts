import { Data, ViewModelDefinition } from './types';
import { eventBus, Subscription } from '@headless/ops';

export const subscribeEvents = (
  viewDef: ViewModelDefinition,
  actions: Record<string, (EventData?: Data) => void>
) => {
  return (viewDef.onEvent || []).map((eventListener) => {
    const { eventId, action } = eventListener;
    const actionFn = actions[action];
    if (!actionFn) {
      console.warn(`action ${action} not found in actions`);
      return null as Subscription<any>;
    }
    return eventBus.subscribe({
      topic: eventId,
      handler: (eventData: Data) => {
        actionFn(eventData);
      },
    });
  });
};

export const unsubscribeEvents = (subscriptions: Subscription<unknown>[]) => {
  subscriptions.forEach((sub) => sub && eventBus.unsubscribe(sub));
};
