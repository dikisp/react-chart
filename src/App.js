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
        labels :['Sangat Bersih','Bersih','Tidak Bersih','Kotor','Menjijikan','Tenggelamkan'],
        datasets:[
            {
                labels : 'Population',
                data:[
                    781278,
                    128912,
                    438269,
                    426787,
                    234689,
                    352758
                ],
                backgroundColor: [
                    'rgba(255,99,132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255,206,86,0.6)',
                    'rgba(153,102,255, 0.6)',
                    'rgba(255,159,64,0.6)',
                    'rgba(255,99,132,0.6)',
                ]
            }
        ]

      }
    })
  }
  render() {
    return (
      <div className="App">
          <Chart chartData={this.state.chartData} location="Bersih" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
