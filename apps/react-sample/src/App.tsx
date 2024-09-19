import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { TestButton } from './components/TestButton';
import { registerLibDeps } from './libs/core';
import { useViewModel } from './libs/react/view';

registerLibDeps('testLib', {
  increment: (x: number) => x + 1,
});

const viewModelDefinition = {
  data: {
    count: 0,
  },
  actions: {
    increment: {
      actionType: 'JSFunction',
      method: 'increment',
      inputData: {
        'count': '{{data.count}}',
      },
      outputData: {
        'count': '',
      },
      deps: 'testLib',
    },
  },
};

function App() {
  const { getData, actions } = useViewModel(viewModelDefinition, {});

  const { count } = getData();

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
      <h1>Vite + React</h1>
      <div className="card">
        <TestButton action={actions.increment}>count is {count as number}</TestButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
