import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Button from '@material-ui/core/Button';
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    <p>Your ID is: {props.user.id}</p>
    <div className="HomeButton">
    <Button onClick={() => props.history.push('/about')} variant= "contained" color="primary">ABOUT</Button>
    </div>
    <div className="HomeButton">
    <Button onClick={() => props.history.push('/dailyEntry')} variant="contained" color="primary">DAILY ENTRY</Button>
    </div>
    <div className="HomeButton">
    <Button onClick={() => props.history.push('/review')} variant="contained" color="primary">REVIEW RECENT</Button>
    </div>
    <div className="HomeButton">
    <Button  variant="contained" color="primary"
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => props.dispatch({ type: 'LOGOUT' })}
    >
      Log Out
  </Button>
    </div>
    
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
