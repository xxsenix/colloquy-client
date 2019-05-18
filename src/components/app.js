import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import Header from "./header/header";
import LandingPage from "./landing/landing-page";
import RegistrationPage from "./auth/registration-page";
import LoginPage from "./auth/login-page";
import Footer from "./footer/footer";
import CreatePost from "./create-post/create-post";
import CommentThread from "./comments/comment-thread";
import { refreshAuthToken } from "../actions/auth";

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/c/:category" component={LandingPage} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/createpost" component={CreatePost} />
        <Route exact path="/c/:category/:post" component={CommentThread} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
