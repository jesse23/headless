import { EventExampleContainerViewModel } from '@headless/components/models';
import { useViewModel } from '@headless/reactivity/solid';
import { EventExampleWrongChild} from './EventExampleWrongChild';
import { EventExampleCorrectChild } from './EventExampleCorrectChild';

export function EventExampleContainer() {
  const { getData, actions } = useViewModel(EventExampleContainerViewModel, {});
    return (
      <div class="card">
        <h2>Event Example</h2>
        <div>count is {getData().count as number}</div>
        <button type="button" onClick={actions.incrementAndPublish}>
          +1 and publish
        </button>
        <EventExampleWrongChild count={getData().count as number} />
        <EventExampleCorrectChild count={getData().count as number} />
      </div>
    );
}

export default EventExampleContainer;
