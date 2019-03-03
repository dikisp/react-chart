import React, { Component } from 'react'
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';


class cart extends Component {
    constructor(props){
        super(props);
        this.state={
            chartData : 
        }
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
                            text :'Toilet'+this.props.location,
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

export default cart;