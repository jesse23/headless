import {
  Data,
  Store,
  SubscriptionDefinition,
  ViewModelDefinition,
} from '@headless/types';
import { eventBus, Subscription } from '@headless/interop';

export const subscribeEvents = (
  viewDef: ViewModelDefinition,
  actions: Record<string, (EventData?: Data) => void>
) => {
  return (viewDef.onEvent || []).map((eventListener) => {
    const { eventId, action } = eventListener;
    const actionFn = actions[action];
    if (!actionFn) {
      console.warn(`action ${action} not found in actions`);
      return null as Subscription<unknown>;
    }
    return eventBus.subscribe({
      topic: eventId,
      handler: (eventData: Data) => {
        actionFn(eventData);
      },
    });
  });
};

export const subscribeEvents2 = (
  subs: SubscriptionDefinition[],
  store: Store,
  getProps: () => Record<string, unknown>
) => {
  return subs.map(({ eventId, action: actionFn, condition }) => {
    return eventBus.subscribe({
      topic: eventId,
      handler: async (eventData: Data) => {
        if (condition(store.getData(), getProps(), eventData)) {
          const res = await actionFn(store.getData(), getProps(), eventData);
          if (res) {
            store.updateData(res);
          }
        }
      },
    });
  });
};

export const unsubscribeEvents = (subscriptions: Subscription<unknown>[]) => {
  subscriptions.forEach((sub) => sub && eventBus.unsubscribe(sub));
};
