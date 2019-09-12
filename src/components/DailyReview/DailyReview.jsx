import React, { Component } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button'
class DailyEntryReview extends Component {
  render() {
    return (
      <div>
        <h1>Hello From Daily Review</h1>
        <table>
            <thead>
            </thead>
            <tbody>
                <tr>{this.props.reduxStore.habitResponses.map(item => (
                    <td>
                        ANSWER: {item}
                    </td>
                ))}
            </tr>
            </tbody>
        </table>
        <p>{JSON.stringify(this.props.reduxStore.habitResponses)}</p>
        <p>{JSON.stringify(this.props.reduxStore.selfReportResponses)}</p>
        <Button variant = "contained" color = "primary" >Submit</Button>
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
