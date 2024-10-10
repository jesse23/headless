// dynamic loading defineComponent from different framework
import { defineComponent } from '@headless/core';
import { eventBus } from '@headless/interop';

export const ComponentJsExample =
  defineComponent &&
  (defineComponent({
    name: 'ComponentJsExample',
    data: {
      count: 0,
    },
    actions: {
      increment: async ({ count }) => {
        // return { path: value } pair
        eventBus.publish({
          topic: 'notifyUpdateComponentJsExample',
          payload: {
            count: (count as number) + 1,
          },
        });
        return {
          count: (count as number) + 1,
        };
      },
    },
    lifecycleHooks: {
      onMount: () => {
        // same as actions interface
        console.log('RenderExample mounted');
        return {
          count: 23,
        };
      },
      onUnmount: () => {
        console.log('RenderExample unmounted');
      },
      onUpdate: () => {
        console.log('RenderExample updated');
      },
    },
    onEvent2: [
      {
        eventId: 'notifyUpdateComponentJsExample',
        action: () => {
          console.log('notifyUpdate');
        },
        condition: ({ count }) => {
          return (count as number) > 5;
        },
      },
    ],
    render: ({ data: { count }, actions: { increment } }) => {
      return (
        <div className="card">
          <h2>Render Component Example</h2>
          <button onClick={increment}>count is {count as number}</button>
        </div>
      );
    },
  }) as unknown as () => JSX.Element);
