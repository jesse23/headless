import { EventExampleContainerViewModel } from '@headless/components';
import { useViewModel } from '../../libs/solidUtils';
import { EventExampleWrongChild, EventExampleCorrectChild } from '../'

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
