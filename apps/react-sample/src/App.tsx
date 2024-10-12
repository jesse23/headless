import './App.css';
import { ComponentJsExample } from '@headless/components/ComponentJsExample';
import { DataExample, EventExampleContainer } from '@headless/components';
import { FormExample } from '@headless/kit-sample';

function App() {
  return (
    <>
        <DataExample />
        <FormExample />
        <ComponentJsExample />
        <EventExampleContainer />
    </>
  );
}

export default App;
