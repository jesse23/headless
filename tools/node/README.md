# Message Contract
The whole contact is just based on `MessageEvent` defined in the browser, with data attribute as below:
```typescript
type RemoteApiData<T = any> = {
  // random string to identify the request
  requestId: string;
  // topic is the api name 
  topic: string;
  // componentId if it is a handler related to a component
  channel: string;
  // request or response
  type: "request" | "response";
  // actual payload of the request/response
  payload: T;
};
```

# Remote API
## API Handler Side
- The API handler is a event subscriber registered on the `window` object, listening to the `message` event or post message request, and process the request. 
  - User could choose to have one handler map and do distribute on their own, or choose to register on window.addEventListener directly.

- After it is done, it will send back the response to the sender, by either `event.source.postMessage` or `window.dispatchEvent`, by the same schema above.

## API Caller Side
API Caller will send the request to a given target window/worker, with certain component ID
  - if component ID is not provided, we will send to the 'global' channel

Caller will hold the promise, and listen to MessageEvent on window, to the 'response' on same 'requestId', and resolve the promise with the response payload.
  - A timeout will be needed to prevent the promise from hanging forever.

# Remote Event
The evenBus can be refactor to be run under the same practice. With that, we will be able to support eventBus across different windows/workers.

## Subscription Side
- Same as `API Handler Side` above except it is not going to have a response back.

## Publish Side
- Now Publish Side has the ability to publish the event to a different window/worker. By providing the target window/worker, a postMessage could be sent to the target window/worker and trigger the event subscription there.