import {ADD_COMMENT} from '../constants'
import {normalizedComments} from '../fixtures'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = defaultComments, action) => {
    const { type, payload, response, error } = action
    
    switch (type) {
        case ADD_COMMENT: {
            state[payload.id] = {
                "id":payload.id,
                "user": payload.name,
                "text": payload.text
            };

            return state
        } break;
    }

    return state
}