import { defineComponent, FunctionalComponent } from 'vue';
import { EventExampleWrongChildViewModel } from '@headless/models';
import { useViewModel } from '../../libs/vueUtils';

export const EventExampleWrongChild = defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { getData } = useViewModel(EventExampleWrongChildViewModel, props);

    return () => {
      const { count } = getData();

      return (
    <div className="card">
      Process "PropData + EventData" in Action: {count as number}
    </div>
      );
    };
  },
}) as unknown as FunctionalComponent<{count: number}>;

export default EventExampleWrongChild;
