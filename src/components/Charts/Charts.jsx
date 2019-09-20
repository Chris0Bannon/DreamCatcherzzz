import React, {Component} from "react";
import {connect} from "react-redux";
import {Line} from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
class Charts extends Component {
    render(){

    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

        return (
          <div>
            <h1 className = "Component-header">Welcome to your charts!</h1>
            <p className="App">You can view trends in your sleep habits in the chart below</p>
            <Paper>
              <Line ref="chart" data={data} />
            </Paper>
            <div className ="HomeButton">
              <Button onClick ={()=>{this.props.history.push("/review")}} variant= "contained" color="secondary">
                BACK
              </Button>
            </div>
          </div>
        );
    }
}

const mapStoreToProps = reduxStore => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(Charts);