import { defineComponent } from '@headless/react';
import { TestButton } from './TestButton';

export const RenderExample = defineComponent({
  name: 'RenderExample',
  data: {
    count: 0,
  },
  actions: {
    increment: async ({ count }) => {
      // return { path: value } pair
      return {
        count: (count as number) + 1,
      };
    },
  },
  lifecycleHooks: {
    onMount: () => {
      // same as actions interface
      console.log('ComponentJsExample mounted');
      return {
        count: 23,
      };
    },
    onUnmount: () => {
      console.log('ComponentJsExample unmounted');
    },
    onUpdate: () => {
      console.log('ComponentJsExample updated');
    },
  },
  render: ({ data: { count }, actions: { increment }}) => {
    return (
      <div className="card">
        <h2>Render Component Example</h2>
        <TestButton action={increment}>count is {count as number}</TestButton>
      </div>
    );
  },
});
