import React from 'react';
import logo from './Dream2.0.png';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Header(props){

   const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event){
    setAnchorEl(event.currentTarget);
  }

  function handleClose(){
    setAnchorEl(null);
  }

   
        return (
          <div className="App">
            <header className="App-header">
            <img src= {logo} className = "App-Logo" alt = "logo" />
             {props.user.id && 
             <>      
            <Button variant = "contained" color ="secondary" onClick = {handleClick}>Menu</Button>
            <Menu
            id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
         <MenuItem component = {Link} to = '/home' onClick={handleClose}>Home</MenuItem>
        <MenuItem component = {Link} to = '/dailyEntry' onClick={handleClose}>Daily Entry</MenuItem>
        <MenuItem component = {Link} to  = '/review' onClick={handleClose}>Review</MenuItem>
        <MenuItem component = {Link} to = '/about' onClick = {handleClose}>About</MenuItem>
        <MenuItem component = {Link} to = '/' onClick = {() => props.dispatch({type: 'LOGOUT'})}>Logout</MenuItem>
        </Menu>
        </>
            }
              <h1 className="App-title">DreamCatcherzzz</h1>
              <h2 className = "App-title">Sleep Tight!</h2>
            </header>
          </div>
        );
    }
const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps)(Header);