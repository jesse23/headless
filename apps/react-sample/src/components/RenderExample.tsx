import { defineComponent } from '../libs/reactUtils';
import { TestButton } from './TestButton';

export const RenderExample = defineComponent({
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
  render: (_, { count }, { increment }) => {
    return (
      <div className="card">
        <h2>Render Component Example</h2>
        <TestButton action={increment}>count is {count as number}</TestButton>
      </div>
    );
  },
});
