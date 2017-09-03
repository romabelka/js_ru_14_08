import {SELECT_ARTICLE} from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SELECT_ARTICLE:
            return action.payload;
        default:
            return state;
    }
}