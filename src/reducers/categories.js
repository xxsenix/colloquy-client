import {
    CHANGE_COLOR, CURRENTLY_SELECTED
} from '../actions/categories';

const initialState = {
    bgColor: '#262626',
    selected: 'all'
};

export default function reducer(state = initialState, action) {
    if (action.type === CHANGE_COLOR) {
        return Object.assign({}, state, {
           bgColor: action.bgColor 
        });
    }

    else if (action.type === CURRENTLY_SELECTED) {
        return Object.assign({}, state, {
           selected: action.selected 
        });
    }  
    return state;
}

