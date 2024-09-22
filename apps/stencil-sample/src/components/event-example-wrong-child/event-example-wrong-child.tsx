import { Component, Prop, State, h } from '@stencil/core';
import { EventExampleWrongChildViewModel } from '@headless/models';
import { Data, applyValues } from '@headless/core';
import { initViewModel } from '@headless/core/src/models';
import { eventBus, Subscription } from '@headless/ops';

@Component({
  tag: 'event-example-wrong-child',
  styleUrl: 'event-example-wrong-child.css',
  shadow: false,
})
export class EventExampleWrongChild {
  private actions: Record<string, (eventData?: Data) => void>;

  private subscriptions: Subscription<unknown>[] = [];

  @Prop() count: number;

  getProps() {
    return {
      count: this.count,
    };
  }

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
        EventExampleWrongChildViewModel,
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
    const viewDef = EventExampleWrongChildViewModel;
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

  render() {
    const { data } = this;

    return <div class="card">Process "PropData + EventData" in Action: {data.count as number}</div>;
  }
}
