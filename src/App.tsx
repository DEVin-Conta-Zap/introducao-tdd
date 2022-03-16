import React from 'react';
import logo from './logo.svg';
import './App.css';
import Radio from './components/Radio';

function App() {
  const onCheck = (value: any) => {
    console.log(value)
  }
  return (
    <div className="App">
      <Radio label='Pizza' name="typeFood" labelFor='Radio' value="pizza" labelColor='black' onCheck={onCheck}/>
      <Radio label='Lasanha' name="typeFood" labelFor='Lasanha' value="lasanha"  labelColor='black' onCheck={onCheck}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
