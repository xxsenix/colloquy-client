import React, { useState } from "react";
import { connect } from "react-redux";
import { postItem } from "../../actions/posts";
import { Field, reduxForm, focus } from "redux-form";
import { Redirect } from "react-router-dom";
import Input from "../input";
import TextArea from "../textarea";
import { required, nonEmpty, length } from "../../validators";
import "./create-post.css";
const titleLength = length({ min: 1, max: 90 });
const bodyLength = length({ min: 1, max: 200 });

let CreatePost = (props) => {
  const [post, setPost] = useState({
    category: "politics",
    title: "",
    body: "",
  });

  console.log("post before submitting: ", post);
  const handleSubmit = (e) => {
    e.preventDefault();

    props.dispatch(postItem(post)).then((res) => {
      // if (
      // props.item &&
      // props.item.category !== undefined &&
      // props.item._id !== undefined
      // ) {
      if (post.category && post.title && post.body) {
        props.history.push(`/`);
      } else {
        alert("Please fill out the form correctly");
      }
    });
  };

  if (!props.loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <main role="main" className="auth-main">
      <fieldset className="auth-fieldset">
        <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="category" className="auth-label">
              category
            </label>
            <div className="select-wrapper">
              <select
                name="category"
                type="select"
                className="category-select"
                value={post.category}
                onChange={(e) =>
                  setPost({
                    category: e.target.value,
                    title: post.title,
                    body: post.body,
                  })
                }
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
              value={post.title}
              onChange={(e) =>
                setPost({
                  category: post.category,
                  title: e.target.value,
                  body: post.body,
                })
              }
              name="title"
              placeholder="title"
              validate={[required, nonEmpty, titleLength]}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="text" className="auth-label">
              What do you want to say?
            </label>
            <Field
              component={TextArea}
              rows="6"
              className="auth-input create-post-text"
              value={post.body}
              onChange={(e) =>
                setPost({
                  category: post.category,
                  title: post.title,
                  body: e.target.value,
                })
              }
              name="body"
              placeholder="keep it clean :)"
              validate={[required, nonEmpty, bodyLength]}
            />
          </div>
          <button
            type="submit"
            className="auth-submit-button"
            disabled={props.pristine || props.submitting}
          >
            {" "}
            create post
          </button>
        </form>
      </fieldset>
    </main>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null,
  posts: state.posts.posts,
  item: state.posts.item,
});

CreatePost = reduxForm({
  form: "CreatePost",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("CreatePost", Object.keys(errors)[0])),
})(CreatePost);

export default connect(mapStateToProps)(CreatePost);

// export class CreatePost extends React.Component {
//   //initial state
//   constructor(props) {
//     super(props);
//     this.state = {
//       category: "politics",
//       title: "",
//       body: "",
//     };
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     this.props.dispatch(postItem(this.state)).then((res) => {
//       if (
//         this.props.item &&
//         this.props.item.category !== undefined &&
//         this.props.item._id !== undefined
//       ) {
//         this.props.history.push(
//           `c/${this.props.item.category}/${this.props.item._id}`
//         );
//       } else {
//         alert("Please fill out the form correctly");
//       }
//     });
//   }

//   render() {
//     if (!this.props.loggedIn) {
//       return <Redirect to="/" />;
//     }

//     return (
//       <main role="main" className="auth-main">
//         <fieldset className="auth-fieldset">
//           <form className="auth-form" onSubmit={(e) => this.handleSubmit(e)}>
//             <div className="input-wrapper">
//               <label htmlFor="category" className="auth-label">
//                 category
//               </label>
//               <div className="select-wrapper">
//                 <select
//                   name="category"
//                   type="select"
//                   className="category-select"
//                   value={this.state.category}
//                   onChange={(e) => this.setState({ category: e.target.value })}
//                 >
//                   <option>politics</option>
//                   <option>programming</option>
//                   <option>movies</option>
//                   <option>sports</option>
//                 </select>
//               </div>
//             </div>
//             <div className="input-wrapper">
//               <label htmlFor="title" className="auth-label">
//                 title
//               </label>
//               <Field
//                 component={Input}
//                 className="auth-input"
//                 type="text"
//                 value={this.state.title}
//                 onChange={(e) => this.setState({ title: e.target.value })}
//                 name="title"
//                 placeholder="title"
//                 validate={[required, nonEmpty, titleLength]}
//               />
//             </div>
//             <div className="input-wrapper">
//               <label htmlFor="text" className="auth-label">
//                 What do you want to say?
//               </label>
//               <Field
//                 component={TextArea}
//                 rows="6"
//                 className="auth-input create-post-text"
//                 value={this.state.body}
//                 onChange={(e) => this.setState({ body: e.target.value })}
//                 name="body"
//                 placeholder="keep it clean :)"
//                 validate={[required, nonEmpty, bodyLength]}
//               />
//             </div>
//             <button
//               type="submit"
//               className="auth-submit-button"
//               disabled={this.props.pristine || this.props.submitting}
//             >
//               {" "}
//               create post
//             </button>
//           </form>
//         </fieldset>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   loggedIn: state.auth.currentUser !== null,
//   posts: state.posts.posts,
//   item: state.posts.item,
// });

// CreatePost = reduxForm({
//   form: "CreatePost",
//   onSubmitFail: (errors, dispatch) =>
//     dispatch(focus("CreatePost", Object.keys(errors)[0])),
// })(CreatePost);

// export default connect(mapStateToProps)(CreatePost);
