import { EventExampleWrongChildViewModel } from '@headless/components/models';
import { useViewModel } from '@headless/reactivity/solid';

export const EventExampleWrongChild = (props: Record<string, unknown>) => {
  const { getData } = useViewModel(EventExampleWrongChildViewModel, props);

  return (
    <div class="card">
      Process "PropData + EventData" in Action: {getData().count as number}
    </div>
  );
};

export default EventExampleWrongChild;
