import React from "react";
import { connect } from "react-redux";
import { postComment } from "../../actions/posts";
import { getOnePost } from "../../actions/posts";

export class CommentForm extends React.Component {
  //initial state
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .dispatch(postComment(this.state, this.props.item.id))
      .then(() => this.clearInput())
      .then(() =>
        this.props.dispatch(getOnePost(this.props.match.params.post))
      );
  }

  clearInput() {
    this.setState({
      body: ""
    });
  }

  render() {
    return (
      <div className="new-comment-wrapper">
        <form className="new-comment-form" onSubmit={e => this.handleSubmit(e)}>
          <textarea
            name="comment"
            placeholder="enter your comment"
            rows="2"
            className="input-comment"
            value={this.state.body}
            onChange={e => this.setState({ body: e.target.value })}
          />
          <button type="submit" className="new-comment-button">
            submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  item: state.posts.item
});

export default connect(mapStateToProps)(CommentForm);
