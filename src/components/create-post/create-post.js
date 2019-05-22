import React from "react";
import { connect } from "react-redux";
import { postItem } from "../../actions/posts";
import "./create-post.css";

export class CreatePost extends React.Component {
  //initial state
  constructor(props) {
    super(props);
    this.state = {
      category: "Politics",
      title: "",
      body: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(postItem(this.state)).then(res => {
      if (this.props.item) {
        this.props.history.push(
          `c/${this.props.item.category}/${this.props.item._id}`
        );
      } else {
        alert("error");
      }
    });
  }

  render() {
    return (
      <main role="main" className="auth-main">
        <fieldset className="auth-fieldset">
          <form className="auth-form" onSubmit={e => this.handleSubmit(e)}>
            <div className="input-wrapper">
              <label htmlFor="category" className="auth-label">
                category
              </label>
              <div className="select-wrapper">
                <select
                  name="category"
                  type="select"
                  className="category-select"
                  value={this.state.category}
                  onChange={e => this.setState({ category: e.target.value })}
                >
                  <option>Politics</option>
                  <option>Programming</option>
                  <option>Movies</option>
                  <option>Sports</option>
                </select>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="title" className="auth-label">
                title
              </label>
              <input
                name="title"
                type="text"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
                placeholder="title"
                autoComplete="off"
                className="auth-input"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="text" className="auth-label">
                What do you want to say?
              </label>
              <textarea
                name="text"
                rows="6"
                value={this.state.body}
                onChange={e => this.setState({ body: e.target.value })}
                placeholder="keep it clean :)"
                className="create-post-text"
              />
            </div>
            <button type="submit" className="auth-submit-button">
              create post
            </button>
          </form>
        </fieldset>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  posts: state.posts.posts,
  item: state.posts.item
});

export default connect(mapStateToProps)(CreatePost);
