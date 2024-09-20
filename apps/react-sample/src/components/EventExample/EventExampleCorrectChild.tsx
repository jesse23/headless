import { EventExampleCorrectChildViewModel } from '@headless/models';
import { useViewModel } from '../../libs/reactUtils';

export function EventExampleCorrectChild(props: Record<string, unknown>) {
  const {data: { count } } = useViewModel(EventExampleCorrectChildViewModel, props);

  return (
    <div className="card">
      Process "PropData + EventData" in onUpdate: {count as number}
    </div>
  );
}

export default EventExampleCorrectChild;
