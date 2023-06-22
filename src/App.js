import logo from './logo.svg';
<<<<<<< HEAD
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
=======
import React from 'react';
import './App.css';
import FlightApp from './components/FlightApp';

function App() {
  return (
    <React.Fragment>
      <FlightApp/>
    </React.Fragment>
>>>>>>> ec0faef (flight search option)
  );
}

export default App;
