import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const START_LOADING = "START_LOADING";
export const startLoading = loading => ({
  type: START_LOADING,
  loading
});

// Fetch Posts
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts
});

export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";
export const fetchPostsError = posts => ({
  type: FETCH_POSTS_ERROR,
  posts
});

export const getAllPosts = filter => dispatch => {
  dispatch(startLoading());

  return fetch(`${API_BASE_URL}/posts`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(posts => dispatch(fetchPostsSuccess(posts)))
    .catch(err => {
      console.log("Error! Try again.");
      dispatch(fetchPostsError(err));
    });
};

//Fetch One Post
export const FETCH_ONE_POST_SUCCESS = "FETCH_ONE_POST_SUCCESS";
export const fetchOnePostSuccess = item => ({
  type: FETCH_ONE_POST_SUCCESS,
  item
});

export const FETCH_ONE_POST_ERROR = "FETCH_ONE_POST_ERROR";
export const fetchOnePostError = error => ({
  type: FETCH_ONE_POST_ERROR,
  error
});

export const getOnePost = postId => dispatch => {
  dispatch(startLoading());

  return fetch(`${API_BASE_URL}/posts/${postId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "content-type": "application/json"
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(item => dispatch(fetchOnePostSuccess(item)))
    .catch(err => {
      console.log("Error! Try again.");
      dispatch(fetchOnePostError(err));
    });
};

// Post Posts
export const POST_ITEM_SUCCESS = "POST_ITEM_SUCCESS";
export const postItemSuccess = item => ({
  type: POST_ITEM_SUCCESS,
  item
});

export const POST_ITEM_ERROR = "POST_ITEM_ERROR";
export const postItemError = error => ({
  type: POST_ITEM_ERROR,
  error
});

export const postItem = item => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/posts/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${authToken}`
    },

    body: JSON.stringify(item)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(item => dispatch(postItemSuccess(item)))
    .catch(err => {
      console.log("Error! Try again.");
      dispatch(postItemError(err));
    });
};

// Post Comments
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
export const postCommentSuccess = item => ({
  type: POST_COMMENT_SUCCESS,
  item
});

export const POST_COMMENT_ERROR = "POST_COMMENT_ERROR";
export const postCommentError = error => ({
  type: POST_COMMENT_ERROR,
  error
});

export const postComment = (item, postId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/posts/${postId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${authToken}`
    },

    body: JSON.stringify(item)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(item => {
      dispatch(postCommentSuccess(item));
    })
    .catch(err => {
      console.log("Error! Try again.");
      dispatch(postCommentError(err));
    });
};

export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const deletePostSuccess = item => ({
  type: DELETE_POST_SUCCESS,
  item
});

export const DELETE_POST_ERROR = "DELETE_POST_ERROR";
export const deletePostError = error => ({
  type: DELETE_POST_ERROR,
  error
});

export const deletePost = postId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      normalizeResponseErrors(res);
    })
    .then(res => {
      res.json();
    })
    .then(item => {
      dispatch(deletePostSuccess(item));
    })
    .catch(err => {
      console.log(err);
      dispatch(deletePostError(err));
    });
};

export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
export const deleteCommentSuccess = item => ({
  type: DELETE_COMMENT_SUCCESS,
  item
});

export const DELETE_COMMENT_ERROR = "DELETE_COMMENT_ERROR";
export const deleteCommentError = error => ({
  type: DELETE_COMMENT_ERROR,
  error
});

export const deleteComment = (postId, commentId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/posts/${postId}/${commentId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(item => dispatch(deleteCommentSuccess(item)))
    .then(dispatch(getOnePost(postId)))
    .catch(err => {
      console.log("Error! Try again.");
      dispatch(deleteCommentError(err));
    });
};
