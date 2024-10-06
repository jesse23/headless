import { EventExampleCorrectChildViewModel } from '@headless/components/models';
import { useViewModel } from '@headless/reactivity/solid';

export const EventExampleCorrectChild = (props: Record<string, unknown>) => {
  const { getData } = useViewModel(EventExampleCorrectChildViewModel, props);

  return (
    <div class="card">
      Process "PropData + EventData" in onUpdate: {getData().count as number}
    </div>
  );
};

export default EventExampleCorrectChild;
