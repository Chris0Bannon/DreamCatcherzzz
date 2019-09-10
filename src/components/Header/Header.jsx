import React, { Component } from 'react';
import logo from './Dream2.0.png';
import Nav from '../Nav/Nav'
// import "../App/App.css";
class Header extends Component {

    render () {
        return (
          <div className="App">
            <header className="App-header">
            <img src= {logo} className = "App-Logo" alt = "logo" />
              <h1 className="App-title">DreamCatcherzzz</h1>
              <h2>Sleep Tight!</h2>
            </header>
            <br />
            <Nav />
          </div>
        );
    }
}

export default Header;