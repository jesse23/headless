import { Action, Data, applyValues, cloneJson, execLifecycleHook, initActions, subscribeEvents, unsubscribeEvents } from '@headless/core';
import { Subscription } from '@headless/interop';
import { Component, State, h } from '@stencil/core';

import { EventExampleContainerViewModel } from '@headless/components';
import '../event-example-wrong-child/event-example-wrong-child';
import '../event-example-correct-child/event-example-correct-child';


@Component({
  tag: 'event-example-container',
  styleUrl: 'event-example-container.css',
  shadow: false,
})
export class EventExampleContainer {
  private vmDef = EventExampleContainerViewModel;

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
        <h2>Event Example</h2>
        <button type="button" onClick={actions.incrementAndPublish}>
          count is {data.count}
        </button>
        <event-example-wrong-child count={data.count as number} />
        <event-example-correct-child count={data.count as number} />
      </div>
    );
  }
}
