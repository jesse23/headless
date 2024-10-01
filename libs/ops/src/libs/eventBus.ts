/*
 Possible Performance overhead:
 - window.postMessage will trigger serialization and deserialization of the data object
 - window.dispatchEvent will trigger the build-in event system than directly calling the handler
*/
import { createMessageEventBus } from './utils';

const _ctx = {
  eventBus: null as ReturnType<typeof createMessageEventBus> | null,
};

const getEventBus = () => {
  if (!_ctx.eventBus) {
    _ctx.eventBus = createMessageEventBus();
    // NOTE: we can use a single event handler, or just add listener directly
    if (typeof window !== 'undefined') {
      window.addEventListener('message', handleMessage);
    }
  }
  return _ctx.eventBus;
};

export const publish: typeof _ctx.eventBus.publish = (eventDef, target) =>
  getEventBus().publish(eventDef, target);

export const subscribe: typeof _ctx.eventBus.subscribe = (subsDef) =>
  getEventBus().subscribe(subsDef);

export const unsubscribe: typeof _ctx.eventBus.unsubscribe = (subs) =>
  getEventBus().unsubscribe(subs);

const handleMessage: typeof _ctx.eventBus.handleMessage = (event) =>
  getEventBus().handleMessage(event);
