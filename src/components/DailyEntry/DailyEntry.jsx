import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

class DailyEntry extends Component {
  componentDidMount = () => {
    console.log("mounting in the beginning slide");
    this.getCurrentSelfReportPrompt();
    this.props.dispatch({ type: "FETCH_ALL_HABIT_PROMPTS" });
    this.props.dispatch({ type: "FETCH_ALL_SELF_REPORT_PROMPTS" });
  };

  getCurrentSelfReportPrompt = id => {
    let action = {
      type: "FETCH_HABIT_PROMPTS",
      payload: 1
    };
    this.props.dispatch(action);
  };

  render() {
    return (
      <div>
        <h1>Hello From Daily Entry</h1>
        <p>
          In the upcoming slides you will be shown a series of prompts. Select
          whether the prompt is true or false and then click the submit key to
          advance to the next question. The first series of prompts will ask
          whether or not you engaged in a certain behaviour that could
          negatively affect the quality of your sleep. If you are able to
          respond false any of those prompts you will be more likely to have
          better sleep quality than those that report true.
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

export default connect()(DailyEntry);
