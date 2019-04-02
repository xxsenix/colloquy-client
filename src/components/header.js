import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';
// import {Link, Redirect} from 'react-router-dom';
import './header.css'

export class Header extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        return (
            <header>
                <nav className="banner">
                    <Link className="coliquy-logo" to="/"><span className="c">C</span>olloquy</Link>
                    <Link className="login" to="/login">LOG IN</Link>
                    <Link className="signup" to="/register">SIGN UP</Link>
                </nav>   
            </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
