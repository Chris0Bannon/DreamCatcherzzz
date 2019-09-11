import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import {connect} from 'react-redux';

class TransitionSlide extends Component {
  componentDidMount = () => {
    console.log("mounting in the transisition slide");
    this.getCurrentSelfReportPrompt();
  };

  getCurrentSelfReportPrompt = id => {
    let action = {
      type: "FETCH_SELF_REPORT_HABIT_PROMPTS",
      payload: 1
    };
    this.props.dispatch(action);
  };

  render() {
    return (
      <div>
        <h1>WELCOME TO THE TransitionSlide!!</h1>
        <Button
          onClick={() => this.props.history.push("/reports/1")}
          variant="contained"
          color="primary"
        >
          Continue
        </Button>
      </div>
    );
  }
}


export default connect()(TransitionSlide);