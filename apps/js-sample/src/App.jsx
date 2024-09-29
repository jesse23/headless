import { useState } from 'react';
import { SimpleButton } from '@headless/components';
import { LoadPanelExample } from '@headless/kit-sample';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { format } from 'date-fns';

function App() {
  const [showPanel, setShowPanel] = useState(false);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h3>simple-button</h3>
        <SimpleButton action={() => setShowPanel((v) => !v)}>
          Show/Hide Panel
        </SimpleButton>
      </div>
      {showPanel && (
        <div className="card">
          <LoadPanelExample />
        </div>
      )}
      <div>
        format date by ext: {format(new Date(2014, 1, 11), 'yyyy-MM-dd')}
      </div>
    </>
  );
}

export default App;
