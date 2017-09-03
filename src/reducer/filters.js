import {FILTER_TITLE, FILTER_DATE} from '../constants'

const defaultFilter = {
    selected: [],
    date: {
        from: null,
        from: null,
    }
}

export default (state = defaultFilter, action) => {
    const {type, payload} = action;
    let newState = {...state};
    switch (type) {
        case FILTER_TITLE:
            newState.selected = payload.selected
            return newState
        case FILTER_DATE:
            newState.date = payload.date
            return newState
    }
    return state
}