import React, { Component } from 'react';
import './App.css';
import Chart from './component/chart'
class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Chart location=" Lantai" legendPosition="right"/>
          <Chart location=" Toilet" legendPosition="right"/>
          <Chart location=" Ruangan" legendPosition="right"/>
      </div>
    );
  }
}

export default App;
