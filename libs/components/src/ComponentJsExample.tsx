import { getLibDeps } from '@headless/core';
import React from 'react';

// dynamic loading defineComponent from different framework
const { defineComponent } = getLibDeps('view');

export const ComponentJsExample = defineComponent && defineComponent({
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
        <button onClick={increment}>count is {count as number}</button>
      </div>
    );
  },
}) as () => JSX.Element;
