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
        <h1 className = "Component-header">Great Work!</h1>
        <p>
          You will now be shown a second series of prompts that are intended to
          measure the quality of your sleep last night. If you are able to
          respond to the prompts with an answer of true, your will likely have
          had higher quality sleep than those who answered false.
        </p>
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