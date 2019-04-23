import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './profile.css';

export function Profile(props) {

    return (
        <section className="profile">
          <h3 className="profile-header">My Profile</h3>
          <div className="profile-content">
            <a href="#">{props.username}</a>
            <p>26 posts</p>
            <p>Member since: <span className="member-since">2019</span></p>
          </div>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    username: state.auth.currentUser.username
});

export default connect(mapStateToProps)(Profile);

