import { Component, Prop, State, h } from '@stencil/core';
import { EventExampleCorrectChildViewModel } from '@headless/models';
import { Data, applyValues } from '@headless/core';
import { initViewModel } from '@headless/core/src/models';
import { eventBus, Subscription } from '@headless/ops';

@Component({
  tag: 'event-example-correct-child',
  styleUrl: 'event-example-correct-child.css',
  shadow: false,
})
export class EventExampleCorrectChild {
  private actions: Record<string, (eventData?: Data) => void>;

  private subscriptions: Subscription<unknown>[] = [];

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

  componentWillLoad() {
    Object.assign(
      this,
      initViewModel(
        EventExampleCorrectChildViewModel,
        {
          getData: this.getData.bind(this),
          updateData: this.updateData.bind(this),
        },
        this.getProps.bind(this),
      ),
    );
  }

  componentDidLoad() {
    // event
    const viewDef = EventExampleCorrectChildViewModel;
    this.subscriptions = (viewDef.onEvent || []).map(eventListener => {
      const { eventId, action } = eventListener;
      const actionFn = this.actions[action];
      if (!actionFn) {
        console.warn(`action ${action} not found in actions`);
        return;
      }
      return eventBus.subscribe({
        topic: eventId,
        handler: (eventData: Data) => {
          actionFn(eventData);
        },
      });
    });
  }

  disconnectedCallback() {
    this.subscriptions.forEach(sub => {
      if(sub) {
        eventBus.unsubscribe(sub);
      }
      this.subscriptions = [];
    });
  }

  componentDidUpdate() {
    // onUpdate
    const viewDef = EventExampleCorrectChildViewModel;
    const onUpdateFnName = viewDef.lifecycleHooks?.onUpdate || '';
    const onUpdateFn = this.actions[onUpdateFnName];
    if (onUpdateFn) {
      onUpdateFn();
    }
  }

  render() {
    const { data } = this;

    return <div class="card">Process "PropData + EventData" in onUpdate: {data.count as number}</div>;
  }
}
