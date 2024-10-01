import { MessageDefinition } from './types';
import { createMessageEventBus } from './utils';


const _ctx = {
  eventBus: null as ReturnType<typeof createMessageEventBus> | null,
  pendingRequests: {} as { [key: string]: (data: unknown) => void },
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

export const callApi = async <T>(
  request: MessageDefinition<T>,
  target = null as Window | null
): Promise<unknown> => {
  const { requestId } = getEventBus().publish(
    {
      ...request,
    },
    target
  );

  return new Promise<unknown>((resolve, reject) => {
    _ctx.pendingRequests[requestId] = resolve;

    setTimeout(() => {
      if (_ctx.pendingRequests[requestId]) {
        delete _ctx.pendingRequests[requestId];
        reject(new Error('Request timed out'));
      }
    }, 5000); // 5 seconds timeout
  });
};

export const register: typeof _ctx.eventBus.subscribe = (subsDef) =>
  getEventBus().subscribe(subsDef);

export const unregister: typeof _ctx.eventBus.unsubscribe = (subs) =>
  getEventBus().unsubscribe(subs);

const handleMessage: typeof _ctx.eventBus.handleMessage = (event) => {
  const { requestId, topic, ack, payload } = event.data;
  if (requestId) {
    if (ack) {
      const resolve = _ctx.pendingRequests[requestId];
      if (resolve) {
        delete _ctx.pendingRequests[requestId];
        resolve(payload);
      }
    } else {
      const promises = getEventBus().handleMessage(event);
      promises.forEach((p) =>
        p.then((payload) => {
          if (event.source) {
            event.source.postMessage({
              requestId,
              ack: true,
              payload,
            });
          } else {
            window.dispatchEvent(
              new MessageEvent('message', {
                data: {
                  requestId,
                  topic,
                  ack: true,
                  payload,
                },
              })
            );
          }
        })
      );
    }
  }
  return [];
};

