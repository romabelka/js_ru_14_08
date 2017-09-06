import { SUBMIT_NEW_COMMENT } from '../constants'
import {normalizedComments} from '../fixtures'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (comments = defaultComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case SUBMIT_NEW_COMMENT:
        {
            const id = action.id
            console.log('---', 'submit new commetn');
            console.log('---', action);
            const {user, text} = payload.comment
            return {
                ...comments,
                [id]: {
                    id,
                    user,
                    text
                }
            }
        }
    }

    return comments
}