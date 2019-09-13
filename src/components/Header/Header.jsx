import React from 'react';
import logo from '../../images/dreamy.png';
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
              <h1 className="App-title">
                {" "}
                <img src={logo} className="App-Logo" alt="logo" />
                DreamCatcherzzz
              </h1>

              {props.user.id && (
                <>
                  <Button
                    className="menuButton"
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                  >
                    Menu
                  </Button>
                  <Menu
                    className="menu"
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      className="menu"
                      component={Link}
                      to="/home"
                      onClick={handleClose}
                    >
                      Home
                    </MenuItem>
                    <MenuItem
                      className="menu"
                      component={Link}
                      to="/dailyEntry"
                      onClick={handleClose}
                    >
                      Daily Entry
                    </MenuItem>
                    <MenuItem
                      className="menu"
                      component={Link}
                      to="/review"
                      onClick={handleClose}
                    >
                      Review
                    </MenuItem>
                    <MenuItem
                      className="menu"
                      component={Link}
                      to="/about"
                      onClick={handleClose}
                    >
                      About
                    </MenuItem>
                    <MenuItem
                      className="menu"
                      component={Link}
                      to="/"
                      onClick={() => props.dispatch({ type: "LOGOUT" })}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
            </header>
          </div>
        );
    }
const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps)(Header);