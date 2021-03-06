import React, { useState } from "react";
import { connect } from "react-redux";
import { postComment } from "../../actions/posts";
import { getOnePost } from "../../actions/posts";
import { reduxForm, focus } from "redux-form";

let CommentForm = (props) => {
  const [item, setItem] = useState({
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props
      .dispatch(postComment(item, props.item.id))
      .then(() => clearInput())
      .then(() => props.dispatch(getOnePost(props.match.params.post)));
  };
  const clearInput = () => {
    setItem({ body: "" });
  };

  return (
    <div className="new-comment-wrapper">
      <form className="new-comment-form" onSubmit={(e) => handleSubmit(e)}>
        <textarea
          name="comment"
          placeholder="enter your comment"
          rows="2"
          className="input-comment"
          value={item.body}
          maxLength="90"
          onChange={(e) => setItem({ body: e.target.value })}
        />
        <button type="submit" className="new-comment-button">
          submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  item: state.posts.item,
});

CommentForm = reduxForm({
  form: "CommentForm",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("CommentForm", Object.keys(errors)[0])),
})(CommentForm);

export default connect(mapStateToProps)(CommentForm);

// export default CommentForm;

// export class CommentForm extends React.Component {
//   //initial state
//   constructor(props) {
//     super(props);
//     this.state = {
//       body: "",
//     };
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     this.props
//       .dispatch(postComment(this.state, this.props.item.id))
//       .then(() => this.clearInput())
//       .then(() =>
//         this.props.dispatch(getOnePost(this.props.match.params.post))
//       );
//   }

//   clearInput() {
//     this.setState({
//       body: "",
//     });
//   }

//   render() {
//     return (
//       <div className="new-comment-wrapper">
//         <form
//           className="new-comment-form"
//           onSubmit={(e) => this.handleSubmit(e)}
//         >
//           <textarea
//             name="comment"
//             placeholder="enter your comment"
//             rows="2"
//             className="input-comment"
//             value={this.state.body}
//             maxLength="90"
//             onChange={(e) => this.setState({ body: e.target.value })}
//           />
//           <button type="submit" className="new-comment-button">
//             submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   posts: state.posts.posts,
//   item: state.posts.item,
// });

// CommentForm = reduxForm({
//   form: "CommentForm",
//   onSubmitFail: (errors, dispatch) =>
//     dispatch(focus("CommentForm", Object.keys(errors)[0])),
// })(CommentForm);

// export default connect(mapStateToProps)(CommentForm);
