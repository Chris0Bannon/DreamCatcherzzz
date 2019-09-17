import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'

class EditSingleItem extends Component {
  fetchMostRecentUserEntry = () => {
    let action = {
      type: "FETCH_MOST_RECENT_USER_ENTRY"
    };
    this.props.dispatch(action);
    this.props.history.push("/recentSubmissionReview");
  };


  render() {
    return (
      <div>
        <p>You responded to this prompt:</p>
        <p>{this.props.reduxStore.changeThisItem.habit_prompt_text}</p>
        <p>with the answer of:</p>
        <p>
          {JSON.stringify(
            this.props.reduxStore.changeThisItem.user_response
          )}
        </p>
        <p>
          would you like to change your response to this prompt to{" "}
          {JSON.stringify(
            !this.props.reduxStore.changeThisItem.user_response
          )}{" "}
          ?
        </p>
        <Button
          onClick={() => {
              console.log('you clicked change');
              
            this.props.dispatch({
              type: "UPDATE_ITEM",
              payload: {
                dailyEntryId: this.props.reduxStore.changeThisItem
                  .daily_entry_id,
                promptId: this.props.reduxStore.changeThisItem.habit_id,
                response: !this.props.reduxStore.changeThisItem.user_response
              } 
            });
            this.props.history.push("/recentSubmissionReview");
          }}
          variant="contained"
        >
          YES, CHANGE IT
        </Button>
        <Button
          onClick={() => {
              this.fetchMostRecentUserEntry();
            this.props.history.push("/recentSubmissionReview");
          }}
          color="secondary"
          variant="contained"
        >
          CANCEL
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