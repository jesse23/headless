import { defineComponent } from 'vue';
import { DataExample, EventExampleContainer } from './components';
import { ComponentJsExample } from '@headless/components';

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
        <ComponentJsExample />
      </>
    );
  },
});
