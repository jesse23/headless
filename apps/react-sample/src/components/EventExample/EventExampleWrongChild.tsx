import { EventExampleWrongChildViewModel } from '@headless/models';
import { useViewModel } from '../../libs/reactUtils';

export function EventExampleWrongChild(props: Record<string, unknown>) {
  const {data: { count }} = useViewModel(EventExampleWrongChildViewModel, props);

  return (
    <div className="card">
      Process "PropData + EventData" in Action: {count as number}
    </div>
  );
}

export default EventExampleWrongChild;
