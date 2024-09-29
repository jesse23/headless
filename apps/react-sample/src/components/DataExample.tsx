import { DataExampleViewModel } from '@headless/models';
import { useViewModel } from '@headless/react';
import { TestButton } from '.';

export function DataExample() {
  const {
    actions: {increment},
    data: { count },
  } = useViewModel(DataExampleViewModel, {});

  return (
    <div className="card">
      <h2>Data Example</h2>
      <TestButton action={increment}>
        count is {count as number}
      </TestButton>
    </div>
  );
}

export default DataExample;
