// Not working yet but for showing how it works it is good
import { Component, State, Action, Lifecycle, Render } from './decorators';

@Component({ name: 'BaseComponent' })
class AwBaseComponent {}

@Component({ name: 'ComponentClassExample' })
class ComponentClassExample extends AwBaseComponent {

  @State() count: number = 0;

  @Action() async increment({ count }: { count: number }) {
    return {
      count: count + 1,
    };
  }

  @Lifecycle('onMount') onMount() {
    console.log('ComponentClassExample mounted');
    return {
      count: 23,
    };
  }

  @Render() render({ data: { count }, actions: { increment } }) {
    return (
      <div className="card">
        <h2>Render Component Example</h2>
        <button onClick={increment}>count is {count as number}</button>
      </div>
    );
  }

  @Lifecycle('onUnmount')
  onUnmount() {
    console.log('ComponentClassExample unmounted');
  }

  @Lifecycle('onUpdate')
  onUpdate() {
    console.log('ComponentClassExample updated');
  }


}

export default ComponentClassExample;