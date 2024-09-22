import { EventExampleWrongChildViewModel } from '@headless/models';
import { useViewModel } from '../../libs/solidUtils';

export const EventExampleWrongChild = (props: Record<string, unknown>) => {
  const { getData } = useViewModel(EventExampleWrongChildViewModel, props);

  return (
    <div class="card">
      Process "PropData + EventData" in Action: {getData().count as number}
    </div>
  );
};

export default EventExampleWrongChild;
