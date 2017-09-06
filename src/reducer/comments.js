import { ADD_COMMENT } from '../constants'
import {normalizedComments} from '../fixtures'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = defaultComments, action) => {
    const { type, payload, response, error } = action

    console.log(action.payload);
    switch (type) {
        case ADD_COMMENT:
            return {
                ...state,
                [action.payload.id]: {
                    id: action.payload.id,
                    user: action.payload.user,
                    text: action.payload.text,
                }
            }
    }

    return state
}
