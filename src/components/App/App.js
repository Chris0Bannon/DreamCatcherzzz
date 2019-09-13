import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';

import Header from '../Header/Header';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import DailyEntry from '../DailyEntry/DailyEntry';
import Review from '../Review/Review';
import EntryItem from '../EntryItem/EntryItem';
import TransitionSlide from '../TransitionSlide/TransitionSlide';
import ReportEntry from '../ReportEntry/ReportEntry';
import CssBaseline from '@material-ui/core/CssBaseline'
import DailyReview from '../DailyReview/DailyReview';
import './App.css';

// const style = {
//   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//   backgroundSize: "cover"
// };

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c158dc"
    },
    secondary: {
      main: "#007ac1"
    },
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    
  }
});


class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      
      <MuiThemeProvider theme={theme}>
        <CssBaseline className = "App"/>
        <Router>
            <Header style={{ background: 'linear - gradient(180deg, rgba(160, 50, 232, 1) 4 %, rgba(254, 9, 121, 1) 42 %, rgba(45, 24, 78, 1) 78 %)'}}/>
          <div>
            {/* <Nav /> */}
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />
              {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
              <ProtectedRoute
                exact
                path="/about"
                component={AboutPage}
              />
              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
              <ProtectedRoute
                exact
                path="/home"
                component={UserPage}
              />
              {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
              <ProtectedRoute
                exact
                path="/info"
                component={InfoPage}
              />
              <ProtectedRoute
                path="/dailyEntry"
                component={DailyEntry}
              />
              <ProtectedRoute
                path="/entry/:id"
                component={EntryItem}
              />
              <ProtectedRoute
                path="/reports/:id"
                component={ReportEntry}
              />
              <ProtectedRoute
                path="/review"
                component={Review}
              />
              <ProtectedRoute
                path="/transition"
                component={TransitionSlide}
              />
              <ProtectedRoute
              path="/dailyReview"
              component = {DailyReview}
              />
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
           
          </div>
        </Router>
      </MuiThemeProvider>
     
    )
  }
}

export default connect()(App);
