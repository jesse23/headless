import { defineComponent, FunctionalComponent } from 'vue';
import { DataExampleViewModel } from '@headless/models';
import { useViewModel } from '../libs/vueUtils';

export const DataExample = defineComponent({
  setup() {
    const { getData, actions } = useViewModel(DataExampleViewModel, {});

    return () => {
      const { count } = getData();

      return (
        <div className="card">
          <h2>Data Example</h2>
          <button type="button" onClick={actions.increment}>
            count is {count as number}
          </button>
        </div>
      );
    };
  },
}) as unknown as FunctionalComponent;

export default DataExample;
