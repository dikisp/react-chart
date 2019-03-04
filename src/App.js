import React, { Component } from 'react';
import './App.css';
import Chart from './component/chart'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      chartData:props.chartData
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
        labels :['Sangat Bersih','Bersih','Cukup Bersih','Kurang'],
        datasets:[
            {
                label : 'Population',
                data:[
                    1,
                    2,
                    3,
                    4,                   
                ],
                backgroundColor: [
                    '#1976d2',
                    '#2196f3',
                    '#64b5f6',
                    '#bbdefb',                  
                ]
            }
        ]

      }
    })
  }
  render() {
    return (
      <div className="App">
          <Chart chartData={this.state.chartData} location=" Lantai" legendPosition="right"/>
          <Chart chartData={this.state.chartData} location=" Toilet" legendPosition="right"/>
          <Chart chartData={this.state.chartData} location=" Ruangan" legendPosition="right"/>
      </div>
    );
  }
}

export default App;
