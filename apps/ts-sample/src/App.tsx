import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CommandExample, PanelExample, LoadPanelExample, FormExample } from './sample-app-kit';

function App() {
  const enableLocalSample = true;
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {enableLocalSample && (
        <>
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
