import {
    START_LOADING,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR
} from '../actions/posts';

const initialState = {
    posts: [],
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
        })
    }
    return state;
}