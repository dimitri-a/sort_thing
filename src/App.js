import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import myData from './data.json'
import help from './sortHelper.js'

class App extends Component {
  render() {

    console.log('start render', help)
    var order = {
      model: { Commercial: 2, Agribusiness: 1 },
      type:{Historical: 3,Actual:2,Projected:1, Proforma:0},
      Actual: { Unqualified: 3, Qualified: 2, Audited: 1 },
      Projected: {Projection:3,  Qualified: 2, Audited: 1},
      BOTTOM: Infinity
    };

    let result = myData.sort(
      (a, b) => 
      {
        // eslint-disable-next-line no-unused-expressions
        order.model[a.model] - order.model[b.model] || order[a.type.type] - order[b.type.type]
      }
    )



    console.log(result)
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
