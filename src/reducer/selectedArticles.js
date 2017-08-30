import {SELECT_ARTICLES} from '../constants'

export default (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SELECT_ARTICLES:
            return payload.selected
    }

    return state
}