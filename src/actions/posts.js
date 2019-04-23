import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const START_LOADING = 'START_LOADING';
export const startLoading = loading => ({
    type: START_LOADING,
    loading
});

// Fetch GET 
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
          dispatch(fetchPostsError(err))
      });
};

export const getPostsByCategory = category => dispatch => {
    dispatch(startLoading());

    return fetch(`${API_BASE_URL}/posts/${category}`, {
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
          dispatch(fetchPostsError(err))
      });
};