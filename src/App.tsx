import reactLogo from './assets/react.svg';
import './App.css';
import { Component } from './components/Component';

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Component />
    </>
  );
}

export default App;
