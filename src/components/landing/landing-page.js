import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./landing-page.css";
import Posts from "../posts/posts";
import Categories from "../categories/categories";
import Profile from "../profile/profile";

export class LandingPage extends React.Component {
  render() {
    let createPost;
    let profile;

    if (this.props.loggedIn) {
      createPost = (
        <Link to="/createpost" className="create-post">
          CREATE POST
        </Link>
      );

      profile = <Profile />;
    }

    return (
      <main role="main" className="landing-main">
        <Posts {...this.props} />
        <div className="right">
          <Categories {...this.props} />
          {createPost}
          {profile}
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
