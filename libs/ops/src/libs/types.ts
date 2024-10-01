export interface MessageDefinition<T> {
  // topic could be event name or api name
  topic: string;
  // componentId is needed if we want to target a specific component
  channel?: string;
  // actual payload of the request/response
  payload: T;
}

export interface Message<T> extends MessageDefinition<T> {
  // random string to identify the request
  requestId: string;
  // componentId is needed if we want to target a specific component
  channel: string;
  // true if it is a ack message from the receiver
  ack?: boolean;
}

export interface SubscriptionDefinition<T> {
  // topic could be event name or api name
  topic: string;
  // componentId is needed if we want to target a specific component
  channel?: string;
  handler: (payload: T) => unknown;
}

export interface Subscription<T> extends SubscriptionDefinition<T> {
  subscriptionId: string;
  channel: string;
}

export interface Subscriptions<T> {
  [topic: string]: {
    [channel: string]: {
      [subscriptionId: string]: Subscription<T>;
    };
  };
}