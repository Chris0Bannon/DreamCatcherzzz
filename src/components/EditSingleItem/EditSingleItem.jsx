import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'

class EditSingleItem extends Component {
 
  render() {
    return (
      <div>
        <h1>HELOOE FORM SINFLE ITEM</h1>
        <p>{this.props.reduxStore.mostRecentUserEntry.habit_prompt_text}</p>
        <p>
          {JSON.stringify(
            this.props.reduxStore.mostRecentUserEntry.user_response
          )}
        </p>
        <p>would you like to change your response to this prompt?</p>
        <Button
          onClick={() => {
            this.props.dispatch({
              type: "UPDATE_ITEM",
              payload: {
                dailyEntryId: this.props.reduxStore.mostRecentUserEntry.daily_entry_id,
                promptId: this.props.reduxStore.mostRecentUserEntry.habit_id,
                response: !(this.props.reduxStore.mostRecentUserEntry.user_response)
              }
            });
          }}
          variant="contained"
        >
          YES
        </Button>
        <Button
          onClick={() => {
            
            this.props.history.push("/recentSubmissionReview");
          }}
          color="secondary"
          variant="contained"
        >
          Nah GO Back
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = reduxStore => {
    return{
        reduxStore
    }
}

export default connect(mapStoreToProps)(EditSingleItem);