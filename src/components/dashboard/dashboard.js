import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../auth/requires-login';
import {fetchProtectedData} from '../../actions/protected-data';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import {Link, Redirect} from 'react-router-dom';
import './dashboard.css';
import Posts from '../posts/posts';
import Categories from '../categories/categories';
import Profile from '../profile/profile';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
        <main role="main" className="landing-main">
            <Posts {...this.props}/>
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
