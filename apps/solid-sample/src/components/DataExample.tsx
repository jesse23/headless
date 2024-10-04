import { DataExampleViewModel } from '@headless/components';
import { useViewModel } from '../libs/solidUtils';
import { JSXElement } from 'solid-js';

export const DataExample = (() => {
  const { actions, getData } = useViewModel(DataExampleViewModel, {});

  return (
    <div class="card">
      <h2>Data Example</h2>
      <button onclick={actions.increment}>
        count is {getData().count as number}
      </button>
    </div>
  ) as unknown as JSXElement;
});

export default DataExample;
