import React, { Component } from 'react'
import { Pie} from 'react-chartjs-2';


class chart extends Component {
    constructor(props){
        super(props);
        this.state={
            chartData : props.chartData
        };
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

    static defaultProps = {
        displayTitle : true,
        displayLegend : true,
        legendPosition : 'right',
        location : 'Room'
    };
    render(){
        return(
            <div className="chart">
                <Pie 
                    data={this.state.chartData}
                    
                    options={{
                        title:{
                            display :true,
                            text :this.props.location,
                            fontSize:25
                        },
                        legend:{
                            display : this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                    /> 
            </div>
        )
    }
}

export default chart;