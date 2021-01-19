import React from "react";
import "./post-body.css";

const PostBody = (props) => {
  return (
    <div className="thread-body-wrapper">
      <div className="thread-body-content">
        <p>{props.item.body}</p>
      </div>
    </div>
  );
};

export default PostBody;
