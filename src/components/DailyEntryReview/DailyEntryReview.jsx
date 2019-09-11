import React, { Component } from "react";
import {connect} from 'react-redux';
class DailyEntryReview extends Component {
  render() {
    return <h1>Hello From Review</h1>;
  }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(DailyEntryReview);
