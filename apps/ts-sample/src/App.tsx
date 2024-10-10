import './App.css';
import {
  CommandExample,
  PanelExample,
  LoadPanelExample,
  FormExample,
  ComponentDeclExample,
  ComponentJsExample,
} from './sample-app-kit';

function App() {
  const enableLocalSample = true;
  return (
    <>
      {enableLocalSample && (
        <>
          <ComponentDeclExample />
          <ComponentJsExample />
          <PanelExample />
          <FormExample />
        </>
      )}
      <CommandExample />
      <LoadPanelExample />
    </>
  );
}

export default App;
