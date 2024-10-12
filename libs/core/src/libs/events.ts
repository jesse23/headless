import {
  Data,
  Store,
  SubscriptionDefinition,
} from '@headless/types';
import { eventBus, Subscription } from '@headless/interop';

export const subscribeEvents = (
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
