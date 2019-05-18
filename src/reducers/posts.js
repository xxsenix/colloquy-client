import {
  START_LOADING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_ONE_POST_SUCCESS,
  FETCH_ONE_POST_ERROR,
  POST_ITEM_SUCCESS,
  POST_ITEM_ERROR
} from "../actions/posts";

const initialState = {
  posts: [],
  item: {
    comments: []
  },
  error: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  if (action.type === START_LOADING) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_POSTS_SUCCESS) {
    return Object.assign({}, state, {
      posts: action.posts,
      error: null,
      loading: false
    });
  } else if (action.type === FETCH_POSTS_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === FETCH_ONE_POST_SUCCESS) {
    return Object.assign({}, state, {
      item: action.item,
      error: null,
      loading: false
    });
  } else if (action.type === FETCH_ONE_POST_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === POST_ITEM_SUCCESS) {
    return Object.assign({}, state, {
      item: action.item,
      error: null,
      loading: false
    });
  } else if (action.type === POST_ITEM_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}