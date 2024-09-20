import { defineComponent, FunctionalComponent } from 'vue';
import { EventExampleCorrectChildViewModel } from '@headless/models';
import { useViewModel } from '../../libs/vueUtils';

export const EventExampleCorrectChild = defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { getData } = useViewModel(EventExampleCorrectChildViewModel, props);

    return () => {
      const { count } = getData();

      return (
    <div className="card">
      Process "PropData + EventData" in onUpdate: {count as number}
    </div>
      );
    };
  },
}) as unknown as FunctionalComponent<{count: number}>;

export default EventExampleCorrectChild;

