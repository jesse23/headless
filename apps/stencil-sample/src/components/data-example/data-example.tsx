import { Action, Data, applyValues, cloneJson, execLifecycleHook, initActions, subscribeEvents, unsubscribeEvents } from '@headless/core';
import { Subscription } from '@headless/ops';
import { Component, State, h } from '@stencil/core';

import { DataExampleViewModel } from '@headless/models';

@Component({
  tag: 'data-example',
  styleUrl: 'data-example.css',
  shadow: false,
})
export class DataExample {
  private vmDef = DataExampleViewModel;

  // props
  getProps() {
    return {
    };
  }

  // data
  @State() data: Data;

  getData() {
    return this.data;
  }

  updateData(values: Data) {
    this.data = applyValues(this.getData(), values);
  }

  // action
  private actions: Record<string, Action>;

  componentWillLoad() {
    this.data = cloneJson(this.vmDef.data);
    this.actions = initActions(this.vmDef.actions || {}, {
      getData: this.getData.bind(this),
      updateData: this.updateData.bind(this),
    }, this.getProps.bind(this));
  }

  // subscriptions
  private subscriptions: Subscription<unknown>[] = [];

  async componentDidLoad() {
    await execLifecycleHook(this.vmDef, this.actions, 'onMount');

    this.subscriptions = subscribeEvents(this.vmDef, this.actions);
  }

  async disconnectedCallback() {
    unsubscribeEvents(this.subscriptions);
    this.subscriptions = [];

    await execLifecycleHook(this.vmDef, this.actions, 'onUnmount');
  }

  // update hook
  async componentDidUpdate() {
    await execLifecycleHook(this.vmDef, this.actions, 'onUpdate');
  }

  render() {
    const { data, actions } = this;

    return (
      <div class="card">
        <h2>Data Example</h2>
        <button type="button" onClick={actions.increment}>
          count is {data.count}
        </button>
      </div>
    );
  }
}
