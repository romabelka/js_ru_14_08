import {ADD_COMMENT} from '../constants'
import {normalizedComments} from '../fixtures'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = defaultComments, action) => {
    const { type, payload, response, error } = action
    
    
    // почему-то мы не попадаем в этот редьюсер

    switch (type) {
        case ADD_COMMENT: {
            
            const newComment = {
                "user": payload.name,
                "text": payload.comment
            }

            return {...state, newComment}
        } break;
    }

    return state
}