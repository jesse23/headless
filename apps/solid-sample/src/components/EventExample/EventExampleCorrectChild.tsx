import { EventExampleCorrectChildViewModel } from '@headless/components';
import { useViewModel } from '../../libs/solidUtils';

export const EventExampleCorrectChild = (props: Record<string, unknown>) => {
  const { getData } = useViewModel(EventExampleCorrectChildViewModel, props);

  return (
    <div class="card">
      Process "PropData + EventData" in onUpdate: {getData().count as number}
    </div>
  );
};

export default EventExampleCorrectChild;
