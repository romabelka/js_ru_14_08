import {PICK_DATE} from '../constants';

let defaultState = {
    from: null,
    to: null,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case PICK_DATE:
            return action.payload;
        default:
            return state;
    }
}