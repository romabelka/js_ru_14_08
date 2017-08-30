import {SELECT_RANGE} from '../constants'

export default (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case SELECT_RANGE:
            return payload.range
    }

    return state
}