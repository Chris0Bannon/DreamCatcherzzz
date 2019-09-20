import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

class Review extends Component {

fetchUserEntries =(event) => {
  console.log('you clicked a fetcher');
  let action = {
    type: 'FETCH_ALL_USER_ENTRIES'
  }
  this.props.dispatch(action);

  this.props.history.push('/totalHistory')
}

fetchMostRecentUserEntry = () => {
 let action = {
   type: 'FETCH_MOST_RECENT_USER_ENTRY'
 };
 this.props.dispatch(action);
 this.props.history.push('/recentSubmissionReview')
}

fetchGraphingData = () => {
  let action = {
    type: 'FETCH_GRAPHING_DATA'
  };
  this.props.dispatch(action)
  this.props.history.push("/charts");
}
    render() {
        return (
          <div>
            <h1 className="Component-header"> History Menu</h1>
            <div className="HomeButton">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  this.props.history.push("/home");
                }}
                className="tryItBtn"
              >
                RETURN HOME
              </Button>
            </div>
            <div className="HomeButton">
              <Button
                style={{
                  background:
                    "radial-gradient(circle, rgba(50,210,232,0) 4%, rgba(9,224,254,1) 65%, rgba(45,24,78,1) 96%)"
                }}
                onClick={this.fetchUserEntries}
              >
                VIEW YOUR ENTIRE HISTORY
              </Button>
            </div>
            <div className="HomeButton">
              <Button
                variant="contained"
                style={{
                  background:
                    "radial-gradient(circle, rgba(50,210,232,0) 4%, rgba(9,224,254,1) 65%, rgba(45,24,78,1) 96%)"
                }}
                onClick={this.fetchMostRecentUserEntry}
              >
                EDIT YOUR MOST RECENT ENTRY
              </Button>
            </div>
            <div className="HomeButton">
              <Button
                className="HomeButton"
                variant="contained"
                color="secondary"
                onClick={this.fetchGraphingData}
              >
                DATA VISUALIZATION
              </Button>
            </div>
          </div>
        );
    }

}


export default connect()(Review);