import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

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
            <div className="dashboard">
              {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser !== null
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
