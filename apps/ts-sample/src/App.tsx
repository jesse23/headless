import './App.css';
import {
  CommandExample,
  PanelExample,
  LoadPanelExample,
  FormExample,
  ComponentDeclExample,
} from './sample-app-kit';

function App() {
  const enableLocalSample = true;
  return (
    <>
      {enableLocalSample && (
        <>
          <ComponentDeclExample />
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
