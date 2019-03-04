import React, { Component } from 'react';
import './App.css';
import Chart from './component/chart'
class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Chart location=" Lantai" legendPosition="right"/>
          <hr style={{height:'2px',background:'#444'}}/>
          <Chart location=" Toilet" legendPosition="right"/>
          <hr style={{height:'2px',background:'#444'}}/>
          <Chart location=" Ruangan" legendPosition="right"/>
      </div>
    );
  }
}

export default App;
