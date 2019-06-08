import React from "react";
import { connect } from "react-redux";
import { postItem } from "../../actions/posts";
import { Field, reduxForm, focus } from "redux-form";
import { Redirect } from "react-router-dom";
import Input from "../input";
import { required, nonEmpty, length, isTrimmed } from "../../validators";
import "./create-post.css";
const contentLength = length({ min: 5, max: 90 });

export class CreatePost extends React.Component {
  //initial state
  constructor(props) {
    super(props);
    this.state = {
      category: "politics",
      title: "",
      body: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.dispatch(postItem(this.state)).then(res => {
      if (
        this.props.item &&
        this.props.item.category !== undefined &&
        this.props.item._id !== undefined
      ) {
        this.props.history.push(
          `c/${this.props.item.category}/${this.props.item._id}`
        );
      } else {
        alert("Please fill out the form correctly");
      }
    });
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

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
                  <option>politics</option>
                  <option>programming</option>
                  <option>movies</option>
                  <option>sports</option>
                </select>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="title" className="auth-label">
                title
              </label>
              <Field
                component={Input}
                className="auth-input"
                type="text"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
                name="title"
                placeholder="title"
                validate={[required, nonEmpty, isTrimmed, contentLength]}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="text" className="auth-label">
                What do you want to say?
              </label>
              <Field
                component={Input}
                name="text"
                rows="6"
                value={this.state.body}
                onChange={e => this.setState({ body: e.target.value })}
                placeholder="keep it clean :)"
                className="create-post-text"
                validate={[required, nonEmpty, isTrimmed, contentLength]}
              />
            </div>
            <button
              type="submit"
              className="auth-submit-button"
              disabled={this.props.pristine || this.props.submitting}
            >
              {" "}
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

CreatePost = reduxForm({
  form: "CreatePost",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("CreatePost", Object.keys(errors)[0]))
})(CreatePost);

export default connect(mapStateToProps)(CreatePost);
