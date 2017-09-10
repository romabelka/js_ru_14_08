import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS, FAIL} from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import {Map, fromJS, Record} from 'immutable'

const CommentRecord = Record({
	id: null,
	user: null,
	text: null,
})

const defaultState = arrToMap([], CommentRecord)

export default (state = defaultState, action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            const newComment = {
            	...payload.comment,
            	id: randomId
            }
            return state.set(randomId, new CommentRecord(newComment))

        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
        	const commentsForArticle = arrToMap(response, CommentRecord)
        	return state.mergeDeep(commentsForArticle)
    }

    return state
}