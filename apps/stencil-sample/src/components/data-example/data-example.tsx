import { Component, Prop, State, h } from '@stencil/core';
import { DataExampleViewModel } from '@headless/models';
import { Data, applyValues } from '@headless/core';
import { initViewModel } from '@headless/core/src/models';

@Component({
  tag: 'data-example',
  styleUrl: 'data-example.css',
  shadow: false,
})
export class DataExample {
  private actions: Record<string, () => void>;

  @State() data: Data;

  getData() {
    return this.data;
  }

  updateData(values: Data) {
    this.data = applyValues(this.getData(), values);
  }

  componentWillLoad() {
    Object.assign(this, initViewModel(DataExampleViewModel, {
      getData: this.getData.bind(this),
      updateData: this.updateData.bind(this),
    }, () => ({})));
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
