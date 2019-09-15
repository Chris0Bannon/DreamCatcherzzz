import React, {Component} from 'react';
import {connect } from 'react-redux';

class RecentSubmissionReview extends Component {


    render(){
        return(
            <h1>Hello from RecentSubmissionReview</h1>
        )
    }

}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(RecentSubmissionReview)