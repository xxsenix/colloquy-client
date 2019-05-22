import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import OnePost from "../posts/one-post";
import CommentForm from "./comment-form";
import CommentList from "./comment-list";
import Categories from "../categories/categories";
import Profile from "../profile/profile";
import PostBody from "../post-body/post-body";
import { getOnePost } from "../../actions/posts";
import "./comment-thread.css";

export class CommentThread extends React.Component {
  componentDidMount() {
    this.props.dispatch(getOnePost(this.props.match.params.post));
  }

  // componentDidUpdate() {
  //   // this.props.dispatch(getOnePost(this.props.match.params.post));
  //   this.props.dispatch(getOnePost(this.props.item.id));
  // }

  render() {
    console.log(this.props.item);
    let categories;
    let profile;
    let createPost;
    let item = this.props.item;

    if (this.props.loggedIn) {
      categories = <Categories />;
      createPost = (
        <Link to="/createpost" className="create-post">
          Create Post
        </Link>
      );
      profile = <Profile />;
    }

    return (
      <main role="main" className="landing-main">
        <div className="comment-component-wrapper">
          <section className="posts">
            <ul className="posts-list">
              <OnePost item={item} />
            </ul>
          </section>
          <PostBody item={item} />
          <CommentForm {...this.props} />
          <CommentList item={item} />
        </div>
        <div className="right">
          {categories}
          {createPost}
          {profile}
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  item: state.posts.item
});

export default connect(mapStateToProps)(CommentThread);
