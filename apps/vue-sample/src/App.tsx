import { defineComponent } from 'vue';
import { DataExample, EventExampleContainer } from './components';

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    return () => (
      <>
        <DataExample />
        <EventExampleContainer />
      </>
    );
  },
});
