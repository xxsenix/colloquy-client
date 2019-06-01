import React from "react";
import { Link } from "react-router-dom";
import "./posts.css";

export default class Post extends React.Component {
  render() {
    const posts = this.props.posts.map((post, i) => {
      let date = new Date(post.created);
      return (
        <li key={i} className="item">
          <div className="post-wrapper" id={post.id}>
            <div className="voting-box">
              <div className="voting-box-content">
                <button className="voting-button">
                  <i className="fas fa-angle-up" />
                </button>
                <span>{post.votes}</span>
                <button className="voting-button">
                  <i className="fas fa-angle-down" />
                </button>
              </div>
            </div>
            <div className="content-wrapper">
              <div className="title-wrapper">
                <a href="/">{post.title}</a>
              </div>
              <div className="details-wrapper">
                <Link
                  className="comments"
                  to={`/c/${post.category}/${post.id}`}
                >
                  <i className="fas fa-comments" /> {post.comments.length}{" "}
                  comments{" "}
                </Link>
                <a className="category" href="/">
                  {post.category}
                </a>
                <p className="author">posted by {post.author}</p>
              </div>
            </div>
            <div className="date-and-author">
              <p className="date">{date.toLocaleDateString()}</p>
            </div>
          </div>
        </li>
      );
    });
    return posts;
  }
}
