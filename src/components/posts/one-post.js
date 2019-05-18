import React from "react";
import { Link } from "react-router-dom";
import "./posts.css";

export default class OnePost extends React.Component {
  render() {
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
              <p className="author">{this.props.item.author}</p>
            </div>
          </div>
          <div className="date-and-author">
            <p className="date">{date.toLocaleDateString()}</p>
          </div>
        </div>
      </li>
    );
  }
}
