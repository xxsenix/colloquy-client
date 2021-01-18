import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../../actions/posts";
import Post from "./post";
import Spinner from "react-spinkit";
import "./posts.css";

const Posts = (props) => {
  const isLoading = () => {
    if (props.loading) {
      return (
        <Spinner
          name="three-bounce"
          style={{
            display: "flex",
            color: "#ffffff",
            justifyContent: "center",
            margin: "40px",
          }}
        />
      );
    }
  };

  useEffect(() => {
    props.dispatch(getAllPosts());
  }, []);

  let posts;

  if (props.match !== undefined && props.match.params.category !== undefined) {
    posts = props.posts.filter(
      (post) => post.category.toLowerCase() === props.match.params.category
    );
  } else if (
    props.match !== undefined &&
    props.match.params.user !== undefined
  ) {
    posts = props.posts.filter(
      (post) => post.author.toLowerCase() === props.match.params.user
    );
  } else {
    posts = props.posts;
  }

  return (
    <section className="posts">
      {isLoading()}
      <ul className="posts-list">
        <Post posts={posts} />
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
  };
};

export default connect(mapStateToProps)(Posts);

// import React from "react";
// import { connect } from "react-redux";
// import { getAllPosts } from "../../actions/posts";
// import Post from "./post";
// import Spinner from "react-spinkit";
// import "./posts.css";

// export class Posts extends React.Component {
//   isLoading() {
//     if (this.props.loading) {
//       return (
//         <Spinner
//           name="three-bounce"
//           style={{
//             display: "flex",
//             color: "#ffffff",
//             justifyContent: "center",
//             margin: "40px"
//           }}
//         />
//       );
//     }
//   }

//   componentDidMount() {
//     this.props.dispatch(getAllPosts());
//   }

//   render() {
//     let posts;

//     if (
//       this.props.match !== undefined &&
//       this.props.match.params.category !== undefined
//     ) {
//       posts = this.props.posts.filter(
//         post => post.category.toLowerCase() === this.props.match.params.category
//       );
//     } else if (
//       this.props.match !== undefined &&
//       this.props.match.params.user !== undefined
//     ) {
//       posts = this.props.posts.filter(
//         post => post.author.toLowerCase() === this.props.match.params.user
//       );
//     } else {
//       posts = this.props.posts;
//     }

//     return (
//       <section className="posts">
//         {this.isLoading()}
//         <ul className="posts-list">
//           <Post posts={posts} />
//         </ul>
//       </section>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     posts: state.posts.posts,
//     loading: state.posts.loading
//   };
// };

// export default connect(mapStateToProps)(Posts);
