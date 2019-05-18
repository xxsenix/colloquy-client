import React from "react";

export default function CommentForm(props) {
  return (
    <div className="new-comment-wrapper">
      <form className="new-comment-form">
        <textarea
          name="comment"
          placeholder="enter your comment"
          rows="2"
          className="input-comment"
        />
        <button type="submit" className="new-comment-button">
          submit
        </button>
      </form>
    </div>
  );
}
