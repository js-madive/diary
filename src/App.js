import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Test from './Test';

/*
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
  );
}
*/

class App2 extends Component {
  render() {
    return (
      <>
      <div id="wrap">
        <h1>Hello World</h1>
        <Test />
      </div>
      </>
    );
  }
}

export default App2;
