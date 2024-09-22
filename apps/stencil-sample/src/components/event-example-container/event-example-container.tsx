import { Component, State, h } from '@stencil/core';
import { EventExampleContainerViewModel } from '@headless/models';
import { Data, applyValues } from '@headless/core';
import { initViewModel } from '@headless/core/src/models';
import '../event-example-wrong-child/event-example-wrong-child';
import '../event-example-correct-child/event-example-correct-child';

@Component({
  tag: 'event-example-container',
  styleUrl: 'event-example-container.css',
  shadow: false,
})
export class EventExampleContainer {
  private actions: Record<string, () => void>;


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
        EventExampleContainerViewModel,
        {
          getData: this.getData.bind(this),
          updateData: this.updateData.bind(this),
        },
        () => ({}),
      ),
    );
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
