import { Message, MessageDefinition, Subscription, SubscriptionDefinition, Subscriptions } from "./types";


export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};

export const publish = <T>(
  { topic, channel = "global", payload }: MessageDefinition<T>,
  target = null as Window | null
): Message<T> => {
  const requestId = generateId();
  const request: Message<T> = {
    requestId,
    topic,
    channel,
    payload,
  };

  if (target) {
    if ((target as typeof window).postMessage) {
      // iframe, popup window, or web worker
      (target as typeof window).postMessage(request, "*");
    } else {
      throw new Error("Invalid target");
    }
  } else {
    // TODO: auto identify the target is wrong - what if a whole page
    // that contains this component, get reused in iframe?
    // child to parent
    if (window.parent !== window) {
      // iframe
      console.log(`event iframe->parent: ${topic}`);
      window.parent.postMessage(request, "*");
    } else if (window.opener) {
      // popup window
      console.log(`event popup->parent: ${topic}`);
      window.opener.postMessage(request, "*");
    } else if (self !== window) {
      // web worker
      console.log(`event webworker->parent: ${topic}`);
      self.postMessage(request, "*");
    } else {
      console.log(`event to window: ${topic}`);
      // custom element for both parent->child or child->parent
      window.dispatchEvent(new MessageEvent("message", { data: request }));
    }
  }

  return request;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createMessageEventBus = <T=any>() => {
  const _subscriptions: Subscriptions<T> = {};

  const subscribe = ({
    topic,
    channel = "global",
    handler,
  }: SubscriptionDefinition<T>): Subscription<T> => {
    const subscription = {
      subscriptionId: generateId(),
      topic,
      channel,
      handler,
    };

    _subscriptions[topic] = {
      ..._subscriptions[topic],
      [channel]: {
        ..._subscriptions[topic]?.[channel],
        [subscription.subscriptionId]: subscription,
      },
    };

    return subscription;
  };

  const unsubscribe = (subscription: Subscription<T>): void => {
    delete _subscriptions[subscription.topic]?.[subscription.channel]?.[
      subscription.subscriptionId
    ];
  };

  const handleMessage = (event: MessageEvent<Message<T>>): Promise<unknown>[] => {
    const { payload, channel, topic } = event.data;
    if (_subscriptions[topic]?.[channel]) {
      return Object.values(_subscriptions[topic][channel]).map(({ handler }) =>
        Promise.resolve(handler(payload))
      );
    }
    return [];
  };

  return {
    publish,
    subscribe,
    unsubscribe,
    handleMessage,
  };
};
