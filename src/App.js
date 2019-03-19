import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import myData from './data.json'
import help from './sortHelper.js'

class App extends Component {
  render() {

    console.log('start render', help)
  
  
  var order = {
    model: {
      Commercial: 1,
      Agribusiness: 2
    },
    type: {
      Historical: 1,
      Actual: 2,
      Projected: 3,
      Proforma: 4
    },
    Actual: {
      Unqualified: 1,
      Qualified: 2,
      Audited: 3
    },
    Projected: {
      Projection: 1,
      Qualified: 2,
      Audited: 3
    },
    BOTTOM: Infinity
  };
  
  let result = myData.sort(
    (a, b) => {
      return order.model[a.model] - order.model[b.model] || 
      order.type[a.type] - order.type[b.type] ||
      order.type[a.type][a.quality] - order.type[b.type][b.quality]
    }
  );
  
  console.log(result.map((obj) => obj.id))



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
