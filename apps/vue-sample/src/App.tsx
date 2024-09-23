import { defineComponent } from 'vue';
import { DataExample, EventExampleContainer } from './components';
import { RenderExample } from '@headless/components';

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
        <RenderExample />
      </>
    );
  },
});
