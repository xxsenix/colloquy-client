import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost } from "../../actions/posts";
import "./posts.css";

export class OnePost extends React.Component {
  deleteItem(itemId) {
    this.props.dispatch(deletePost(itemId)).then(res => {
      this.props.history.push(`/`);
    });
  }

  render() {
    let deleteButton;

    if (this.props.username === this.props.item.author) {
      deleteButton = (
        <button
          onClick={e => {
            e.preventDefault();
            this.deleteItem(this.props.item.id);
          }}
          className="delete-post-button"
        >
          <i className="fas fa-trash-alt" />
        </button>
      );
    }
    let date = new Date(this.props.item.created);
    return (
      <li className="item">
        <div className="post-wrapper" id={this.props.item.id}>
          <div className="voting-box">
            <div className="voting-box-content">
              <i className="fas fa-angle-up" />
              <span>{this.props.item.votes}</span>
              <i className="fas fa-angle-down" />
            </div>
          </div>
          <div className="content-wrapper">
            <div className="title-wrapper">
              <a href="/">{this.props.item.title}</a>
            </div>
            <div className="details-wrapper">
              <Link to="/comments">
                <i className="fas fa-comments" />{" "}
                {this.props.item.comments.length} comments{" "}
              </Link>
              <a className="category" href="/">
                {this.props.item.category}
              </a>
              <p className="author">posted by {this.props.item.author}</p>
            </div>
          </div>
          <div className="date-and-author">
            <p className="date">{date.toLocaleDateString()}</p>
          </div>
          {deleteButton}
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.currentUser ? state.auth.currentUser.username : ""
});

export default connect(mapStateToProps)(OnePost);
