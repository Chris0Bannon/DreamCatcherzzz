import React, { Component } from "react";
import { connect } from "react-redux";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

class ReportEntry extends Component {
  state = {
    value: 0
  };

  componentDidMount = () => {
    this.getCurrentSelfReportPrompt();
  };

  getCurrentSelfReportPrompt = id => {
    let action = {
      type: "FETCH_SELF_REPORT_HABIT_PROMPTS",
      payload: this.props.match.params.id
    };
    this.props.dispatch(action);
  };

getPreviousSelfReportPrompts = id => {
  let action = {
    type: "FETCH_SELF_REPORT_HABIT_PROMPTS",
    payload: --this.props.match.params.id
  };
  this.props.dispatch(action);
};

  getNextSelfReportPrompt = id => {
    let action = {
      type: "FETCH_SELF_REPORT_HABIT_PROMPTS",
      payload: ++this.props.match.params.id
    };
    this.props.dispatch(action);
  };

backHandler = event => {
  console.log('you clicked back');
  this.getPreviousSelfReportPrompts();
  let action = {
    type: "REMOVE_RECENT_SELF_REPORT",
  };
  this.props.dispatch(action);
  this.setState({
    value: 0,
  })
};

  nextHandler = event => {
    event.preventDefault();

    if (this.state.value === 0) {
      return alert("do a thing dummy");
    } else {
      this.props.dispatch({
        type: "ADD_SELF_REPORT",
        payload: this.state.value
      });
      this.getNextSelfReportPrompt();
      this.setState({
      value: 0,
      })
    }
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.props.reduxStore.selfReportPrompt == "" &&
          this.props.history.push("/dailyReview")}
        <h1>Welcome to the self report section</h1>
        <p>{this.props.reduxStore.selfReportPrompt.self_report_prompt_text}</p>
        <form onSubmit={this.nextHandler}>
          <RadioGroup
            name="trueOrFalse"
            value = {this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="true"
              control={<Radio color="primary" />}
              label="TRUE"
            />
            <FormControlLabel
              value="false"
              control={<Radio color="primary" />}
              label="FALSE"
            />
          </RadioGroup>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.backHandler}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" type="submit">
            NEXT
          </Button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStoreToProps)(ReportEntry);
