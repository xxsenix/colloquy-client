import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./profile.css";

export class Profile extends React.Component {
  render() {
    let date = new Date(this.props.created);
    return (
      <section className="profile">
        <h3 className="profile-header">My Profile</h3>
        <div className="profile-content">
          <Link
            className="profile-username"
            to={`/user/${this.props.username}`}
          >
            {this.props.username}
          </Link>
          <p>
            Member since:{" "}
            <span className="member-since">{date.toLocaleDateString()}</span>
          </p>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  username: state.auth.currentUser ? state.auth.currentUser.username : "",
  created: state.auth.currentUser.created
});

export default connect(mapStateToProps)(Profile);
