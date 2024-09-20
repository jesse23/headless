import { defineComponent, FunctionalComponent } from 'vue';
import { EventExampleContainerViewModel } from '@headless/models';
import { useViewModel } from '../../libs/vueUtils';
import { EventExampleWrongChild, EventExampleCorrectChild } from '../';

export const EventExampleContainer = defineComponent({
  setup() {
    const { getData, actions } = useViewModel(EventExampleContainerViewModel, {});

    return () => {
      const { count } = getData();

      return (
        <div className="card">
          <h2>Event Example</h2>
          <div>count is {count as number}</div>
          <button type="button" onClick={actions.incrementAndPublish}>
            +1 and publish
          </button>
          <EventExampleWrongChild count={count as number} />
          <EventExampleCorrectChild count={count as number} />
        </div>
      );
    };
  },
}) as unknown as FunctionalComponent;

export default EventExampleContainer;
