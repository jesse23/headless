/*
 Possible Performance overhead:
 - window.postMessage will trigger serialization and deserialization of the data object
 - window.dispatchEvent will trigger the build-in event system than directly calling the handler
*/
import { createMessageEventBus } from "./utils";

const _eventBus = createMessageEventBus();

export const publish: typeof _eventBus.publish = (eventDef, target) =>
  _eventBus.publish(eventDef, target);

export const subscribe: typeof _eventBus.subscribe = (subsDef) =>
  _eventBus.subscribe(subsDef);

export const unsubscribe: typeof _eventBus.unsubscribe = (subs) =>
  _eventBus.unsubscribe(subs);

const handleMessage: typeof _eventBus.handleMessage = (event) =>
  _eventBus.handleMessage(event);

// NOTE: we can use a single event handler, or just add listener directly
window.addEventListener("message", handleMessage);
