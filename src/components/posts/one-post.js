import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost } from "../../actions/posts";
import "./posts.css";

export class OnePost extends React.Component {
  deleteItem(itemId) {
    this.props.dispatch(deletePost(itemId)).then(() => {
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
              <button className="voting-button">
                <i className="fas fa-angle-up" />
              </button>
              <span>{this.props.item.votes}</span>
              <button className="voting-button">
                <i className="fas fa-angle-down" />
              </button>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="title-wrapper">
              <a href="/">{this.props.item.title}</a>
            </div>
            <div className="details-wrapper">
              <Link
                className="comments"
                to={`/c/${this.props.item.category}/${this.props.item.id}`}
              >
                <i className="fas fa-comments" />{" "}
                {this.props.item.comments.length} comments{" "}
              </Link>
              <a className="category" href="/">
                {this.props.item.category}
              </a>
              <p className="author">
                posted by{" "}
                <span className="author-name">{this.props.item.author}</span>
              </p>
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
