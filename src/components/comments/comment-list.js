import React from "react";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/posts";

export class CommentList extends React.Component {
  deleteComment(postId, commentId) {
    this.props.dispatch(deleteComment(postId, commentId)).then(res => {
      this.props.history.push(
        `/c/${this.props.item.category}/${this.props.item.id}`
      );
    });
  }

  render() {
    console.log(this.props);
    let deleteButton;

    if (this.props.item.comments.length === 0) {
      return (
        <div className="no-comments">
          <p className="no-comments-paragraph">No comments just yet :(</p>
        </div>
      );
    } else {
      let data = Array.from(this.props.item.comments);

      const comments = data.map((comment, i) => {
        if (this.props.username === comment.author.username) {
          deleteButton = (
            <button
              onClick={e => {
                e.preventDefault();
                this.deleteComment(this.props.item.id, comment._id);
              }}
              className="delete-button"
            >
              delete
            </button>
          );
        }
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
                  {deleteButton}
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

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  username: state.auth.currentUser ? state.auth.currentUser.username : ""
});

export default connect(mapStateToProps)(CommentList);
