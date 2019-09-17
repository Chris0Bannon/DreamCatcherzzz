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

    render() {
        return (
          <div>
            <h1>Hello From Review</h1>
            <Button onClick = {() => {this.props.history.push('/home')}} className = "tryItBtn">Back</Button>
            <Button style = {{background: 'radial-gradient(circle, rgba(50,210,232,0) 4%, rgba(9,224,254,1) 65%, rgba(45,24,78,1) 96%)'}} onClick = {this.fetchUserEntries}>Get Everything</Button>
            <Button style = {{background: 'radial-gradient(circle, rgba(50,210,232,0) 4%, rgba(9,224,254,1) 65%, rgba(45,24,78,1) 96%)'}} onClick = {this.fetchMostRecentUserEntry}>Get Most Recent Entry</Button>
            
          </div>
        );
    }

}


export default connect()(Review);