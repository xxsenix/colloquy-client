import React from "react";

export default function CommentList(props) {
  if (props.item.comments.length === 0) {
    return (
      <div className="no-comments">
        <p className="no-comments-paragraph">No comments just yet :(</p>
      </div>
    );
  } else {
    return (
      <ul className="comment-list">
        <li className="comment-item">
          <div className="comment-wrapper">
            <div className="commented-by-wrapper">
              <a className="author" href="/">
                user1
              </a>
              <span className="timestamp">6 mins ago</span>
            </div>
            <div className="comment-content-wrapper">
              <div className="comment-content">
                <p>Thanks!</p>
              </div>
            </div>
          </div>
        </li>
        <li className="comment-item">
          <div className="comment-wrapper">
            <div className="commented-by-wrapper">
              <a className="author" href="/">
                user2
              </a>
              <span className="timestamp">12 mins ago</span>
            </div>
            <div className="comment-content-wrapper">
              <div className="comment-content">
                <p>Cool post, dude!</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}
