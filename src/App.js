import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import myData from  './data.json'
import helper from './sortHelper.js'

class App extends Component {
  render() {

    let result = myData.sort(helper.sortStuff)

    console.log(result);

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
}

export default App;
