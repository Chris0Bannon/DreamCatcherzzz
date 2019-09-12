import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
class DailyEntryReview extends Component {

 state = {

 }   
 
componentDidMount = () => {
    this.setState({
        habits: this.props.reduxStore.habitResponses,
        reports: this.props.reduxStore.selfReportResponses
    })
}
  sendIt = () => {
    this.props.dispatch({
      type: "ADD_HABIT_RESPONSES",
      payload: this.state.habits
    });
    this.props.dispatch({
        type: "ADD_SELF_REPORT_RESPONSES",
        payload: this.state.reports
    })
    this.props.dispatch({
        type: 'RESET_HABIT_RESPONSES'
    })
    this.props.dispatch({
        type: 'RESET_SELF_REPORT_RESPONSES'
    })
    this.props.history.push('/home')
  };

  render() {
    return (
      <div>
        <h1>Hello From Daily Review</h1>
        <table className="bestTable">
          <thead></thead>
          <tbody>
            <tr>
              {this.props.reduxStore.allHabitPrompts.map(item => (
                <td key={item.id}>{item.habit_prompt_text}</td>
              ))}
            </tr>
            <tr>
              {this.props.reduxStore.habitResponses.map(item => (
                <td>ANSWER: {item}</td>
              ))}
            </tr>
            <tr>
              {this.props.reduxStore.allSelfReportPrompts.map(item => (
                <td className="sure" key={item.id}>
                  {item.habit_prompt_text}
                </td>
              ))}
            </tr>
            <tr>
              {this.props.reduxStore.selfReportResponses.map(item => (
                <td className="sure">ANSWER: {item}</td>
              ))}
            </tr>
          </tbody>
        </table>

        <Button
          onClick={this.sendIt}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStoreToProps)(DailyEntryReview);
