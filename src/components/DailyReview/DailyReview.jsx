import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
class DailyEntryReview extends Component {
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

        <Button variant="contained" color="primary">
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
