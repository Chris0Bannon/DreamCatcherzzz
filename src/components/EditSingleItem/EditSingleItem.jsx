import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
        <Paper>
          <h1 className="Component-header">You responded to:</h1>
          <p className="someText">
            {this.props.reduxStore.changeThisItem.habit_prompt_text}
          </p>
          <h1 className="Component-header">with the answer of:</h1>
          <p className="trueOrFalse">
            {JSON.stringify(this.props.reduxStore.changeThisItem.user_response)}
          </p>
          <h1 className="Component-header">
            would you like to change your response to
          </h1>
          <p className="trueOrFalse">
            {JSON.stringify(
              !this.props.reduxStore.changeThisItem.user_response
            )}
          </p>
          <h1 className="Component-header">?</h1>
        </Paper>
        <div>
          <Button
            className="HomeButton"
            onClick={() => {
              console.log("you clicked change");

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
            color="secondary"
          >
            YES, CHANGE IT
          </Button>
        </div>
        <div className="HomeButton">
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