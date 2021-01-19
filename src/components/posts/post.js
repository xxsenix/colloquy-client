import React from "react";
import { Link } from "react-router-dom";
import "./posts.css";

const Post = (props) => {
  const posts = props.posts.map((post, i) => {
    let date = new Date(post.created);
    return (
      <li key={i} className="item">
        <div className="post-wrapper" id={post.id}>
          <div className="content-wrapper">
            <div className="title-wrapper">
              <Link to={`/c/${post.category}/${post.id}`}>{post.title}</Link>
            </div>
            <div className="details-wrapper">
              <Link className="comments" to={`/c/${post.category}/${post.id}`}>
                <i className="fas fa-comments" /> {post.comments.length}{" "}
                comments{" "}
              </Link>
              <Link className="category" to={`/c/${post.category}`}>
                {post.category}
              </Link>
              <p className="author">
                posted by{" "}
                <Link className="author-name" to={`/user/${post.author}`}>
                  {post.author}
                </Link>
              </p>
            </div>
          </div>
          <div className="date-and-author">
            <p className="date">{date.toLocaleDateString()}</p>
          </div>
        </div>
      </li>
    );
  });
  return posts;
};

export default Post;

// export default class Post extends React.Component {
//   render() {
//     const posts = this.props.posts.map((post, i) => {
//       let date = new Date(post.created);
//       return (
//         <li key={i} className="item">
//           <div className="post-wrapper" id={post.id}>
//             <div className="content-wrapper">
//               <div className="title-wrapper">
//                 <Link to={`/c/${post.category}/${post.id}`}>{post.title}</Link>
//               </div>
//               <div className="details-wrapper">
//                 <Link
//                   className="comments"
//                   to={`/c/${post.category}/${post.id}`}
//                 >
//                   <i className="fas fa-comments" /> {post.comments.length}{" "}
//                   comments{" "}
//                 </Link>
//                 <Link className="category" to={`/c/${post.category}`}>
//                   {post.category}
//                 </Link>
//                 <p className="author">
//                   posted by{" "}
//                   <Link className="author-name" to={`/user/${post.author}`}>
//                     {post.author}
//                   </Link>
//                 </p>
//               </div>
//             </div>
//             <div className="date-and-author">
//               <p className="date">{date.toLocaleDateString()}</p>
//             </div>
//           </div>
//         </li>
//       );
//     });
//     return posts;
//   }
// }
