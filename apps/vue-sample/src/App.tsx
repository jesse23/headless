import '@headless/reactivity/vue';
import { defineComponent } from 'vue';
import { ComponentJsExample } from '@headless/components/ComponentJsExample';
import { DataExample, EventExampleContainer } from '@headless/components';
import { FormExample } from '@headless/kit-sample';

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
        <FormExample />
        <ComponentJsExample />
        <EventExampleContainer />
      </>
    );
  },
});
