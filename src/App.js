import React from 'react';
import logo from './logo.svg';
import './App.css';
import usePropValueModel from './propValue';

function App() {
  const propValue = usePropValueModel();
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>
          Welcome to <code>Child-React-App</code>!
        </h1>
        <div className='message'>
          来自Main-app的值:
          <h1>{propValue.value}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
