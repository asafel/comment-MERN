
import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, COMMENTS_LOADING } from '../actions/types';

const initState = {
    comments: [],
    loading: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return { 
                ...state,
                comments: action.payload,
                loading: false
             };

        case ADD_COMMENT:
            return {
                ...state,
                comments: [action.payload, ...state.comments]
            };

        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment._id !== action.payload)
            };

        case COMMENTS_LOADING:
            return { ...state, loading: true }

        default:
            return state;
    }
}
