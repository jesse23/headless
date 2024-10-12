import { defineComponent } from '@headless/core';
import { Component, State, BaseComponent, Render, Action } from './decorators';

@Component({ name: 'ComponentClassExample' })
export class ComponentClassExampleClass extends BaseComponent {
  @State()
  count: number = 0;

  @State()
  test: number = 0;

  // NOTE: this is tricky here, how to integrate this with MVVM state?
  @Action()
  increment() {
    // doing mutation here. can do setState too
    this.count++;
  }

  @Render()
  render() {
    return (
      <div className="card">
        <h2>Class Component Example</h2>
        <button onClick={() => this.increment()}>count is {this.count}</button>
      </div>
    );
  }
}

const defineComponentClass = (
  ComponentClass: new () => ComponentClassExampleClass
) => {
  const component = new ComponentClass();

  return defineComponent({
    name: component.declComponentName,
    data: component.getData(),
    render: ({ data, actions }) => {
      Object.assign(component, data);
      Object.assign(component, actions);
      return component.render();
    },
  });
};

export const ComponentClassExample = defineComponentClass(
  ComponentClassExampleClass
);

export default ComponentClassExample;
