import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './header.css'

export class Header extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            // <div className="header-bar">
            //     <h1>Foo App</h1>
            //     {logOutButton}
            // </div>
            <header>
                <nav className="banner">
                    <a href="#" className="coliquy-logo"><span class="c">C</span>olloquy</a>
                    <a href="#" className="login">LOG IN</a>
                    <a href="#" className="signup">SIGN UP</a>
                </nav>   
            </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
