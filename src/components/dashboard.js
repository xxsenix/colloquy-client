import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link, Redirect} from 'react-router-dom';
import './dashboard.css';
import Posts from './posts';
import Categories from './categories';
import Profile from './profile';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout" onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
        <main role="main" className="landing-main">
            <Posts />
            <div className="right">
                <Categories />
                <Link to="/createpost" className="create-post">Create Post</Link>
                <Profile />
            </div>
        </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser !== null,
        username: state.auth.currentUser.username
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
