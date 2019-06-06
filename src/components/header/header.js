import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";
import { Link } from "react-router-dom";
import "./header.css";

export class Header extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let logOutLink;
    let usernameLink;
    let logInLink;
    let signUpLink;

    if (this.props.loggedIn) {
      usernameLink = (
        <Link className="username-link" to={`/user/${this.props.username}`}>
          {this.props.username}
        </Link>
      );

      logOutLink = (
        <Link className="logout-link" to="/" onClick={() => this.logOut()}>
          LOG OUT
        </Link>
      );
    } else if (!this.props.loggedIn) {
      logInLink = (
        <Link className="login-link" to="/login">
          LOG IN
        </Link>
      );
      signUpLink = (
        <Link className="signup-link" to="/register">
          SIGN UP
        </Link>
      );
    }

    return (
      <header>
        <nav className="banner">
          <Link className="colloquy-logo" to="/">
            <span className="c">C</span>olloquy
          </Link>
          {usernameLink}
          {logOutLink}
          {logInLink}
          {signUpLink}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  username: state.auth.currentUser ? state.auth.currentUser.username : ""
});

export default connect(mapStateToProps)(Header);
