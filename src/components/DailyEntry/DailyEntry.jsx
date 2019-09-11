import React, {Component} from 'react';
import Button from '@material-ui/core/Button'
class DailyEntry extends Component {
    render(){
        return (
          <div>
            <h1>Hello From Daily Entry</h1>
            <p>
              You will be given a series of prompts. Select wether the prompt is
              true or false and then click the submit key to advance to the next
              question
            </p>
            <Button
              onClick={() => this.props.history.push("/home")}
              variant="contained"
              color="primary"
            >
              BACK
            </Button>
            <Button
              onClick={() => this.props.history.push("/entry/1")}
              variant="contained"
              color="primary"
            >
              BEGIN
            </Button>
          </div>
        );
    }
}

export default DailyEntry