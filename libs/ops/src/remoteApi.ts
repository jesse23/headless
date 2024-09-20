import { MessageDefinition } from "./types";
import { createMessageEventBus } from "./utils";

const _pendingRequests: { [key: string]: (data: unknown) => void } = {};

const _eventBus = createMessageEventBus();

export const callApi = async <T>(
  request: MessageDefinition<T>,
  target = null as Window | null
): Promise<unknown> => {
  const { requestId } = _eventBus.publish(
    {
      ...request,
    },
    target
  );

  return new Promise<unknown>((resolve, reject) => {
    _pendingRequests[requestId] = resolve;

    setTimeout(() => {
      if (_pendingRequests[requestId]) {
        delete _pendingRequests[requestId];
        reject(new Error("Request timed out"));
      }
    }, 5000); // 5 seconds timeout
  });
};

export const register: typeof _eventBus.subscribe = (subsDef) =>
  _eventBus.subscribe(subsDef);

export const unregister: typeof _eventBus.unsubscribe = (subs) =>
  _eventBus.unsubscribe(subs);

const handleMessage: typeof _eventBus.handleMessage = (event) => {
  const { requestId, topic, ack, payload } = event.data;
  if (requestId) {
    if (ack) {
      const resolve = _pendingRequests[requestId];
      if (resolve) {
        delete _pendingRequests[requestId];
        resolve(payload);
      }
    } else {
      const promises = _eventBus.handleMessage(event);
      promises.forEach((p) =>
        p.then((payload) => {
          event.source
            ? event.source.postMessage({
                requestId,
                ack: true,
                payload,
              })
            : window.dispatchEvent(
                new MessageEvent("message", {
                  data: {
                    requestId,
                    topic,
                    ack: true,
                    payload,
                  },
                })
              );
        })
      );
    }
  }
  return [];
};

// NOTE: we can use a single event handler, or just add listener directly
window.addEventListener("message", handleMessage);
