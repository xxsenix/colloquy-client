import React from "react";

export default class CommentList extends React.Component {
  render() {
    if (this.props.item.comments.length === 0) {
      return (
        <div className="no-comments">
          <p className="no-comments-paragraph">No comments just yet :(</p>
        </div>
      );
    } else {
      let data = Array.from(this.props.item.comments);

      const comments = data.map((comment, i) => {
        let date = new Date(comment.created);
        return (
          <ul key={i} className="comment-list">
            <li className="comment-item">
              <div className="comment-wrapper">
                <div className="commented-by-wrapper">
                  <a className="author" href="/">
                    {comment.author.username}
                  </a>
                  <span className="timestamp">{date.toLocaleDateString()}</span>
                  <button className="delete-button">delete</button>
                </div>
                <div className="comment-content-wrapper">
                  <div className="comment-content">
                    <p>{comment.body}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        );
      });
      return comments;
    }
  }
}
