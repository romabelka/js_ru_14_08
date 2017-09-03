import {DELETE_ARTICLE, SELECT_ARTICLE} from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SELECT_ARTICLE:
            return action.payload;
        case DELETE_ARTICLE: {
            return state.filter(item => item.value !== action.payload.id);
        }
        default:
            return state;
    }
}