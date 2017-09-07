import { CHANGE_NEW_COMMENT } from '../constants'

export default (newComments = {}, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_NEW_COMMENT:
            return {...newComments, [payload.articleId]: payload.newComment}
    }

    return newComments
}