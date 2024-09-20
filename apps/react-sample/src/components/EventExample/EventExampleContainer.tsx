import { EventExampleContainerViewModel } from '@headless/models';
import { useViewModel } from '../../libs/reactUtils';
import {
  TestButton,
  EventExampleWrongChild,
  EventExampleCorrectChild,
} from '../';

export function EventExampleContainer() {
  const {
    actions: { incrementAndPublish },
    data: { count },
  } = useViewModel(EventExampleContainerViewModel, {});

  return (
    <div className="card">
      <h2>Event Example</h2>
      <div>count is {count as number}</div>
      <TestButton action={incrementAndPublish}>+1 and publish</TestButton>
      <EventExampleWrongChild count={count} />
      <EventExampleCorrectChild count={count} />
    </div>
  );
}

export default EventExampleContainer;
