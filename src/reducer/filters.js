import { SET_DATE, SET_ARTICLES } from '../constants'
// import {articles as defaultArticles} from '../fixtures'

const initialState = {
    range: {
        from: null,
        to: null,
    },
    selected: [],
};

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_DATE:
            return Object.assign({}, state, {range: payload})
        case SET_ARTICLES:
            return Object.assign({}, state, {selected: payload})
    }

    return state
}
