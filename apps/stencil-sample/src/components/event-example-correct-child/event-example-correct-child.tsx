import { Action, Data, applyValues, cloneJson, execLifecycleHook, initActions, subscribeEvents, unsubscribeEvents } from '@headless/core';
import { Subscription } from '@headless/ops';
import { Component, Prop, State, h } from '@stencil/core';

import { EventExampleCorrectChildViewModel } from '@headless/models';

@Component({
  tag: 'event-example-correct-child',
  styleUrl: 'event-example-correct-child.css',
  shadow: false,
})
export class EventExampleCorrectChild {
  private vmDef = EventExampleCorrectChildViewModel;

  // props
  @Prop() count: number;

  getProps() {
    return {
      count: this.count,
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

  // render
  render() {
    const { data } = this;

    return <div class="card">Process "PropData + EventData" in onUpdate: {data.count as number}</div>;
  }
}
