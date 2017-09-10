import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import {arrToMap} from './utils'
import {Map, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

const ReducerRecord = Record({
    entities: arrToMap([], CommentRecord),
    loading: new Map(),
    loaded: new Map()
})

const defaultState = new ReducerRecord()

export default (state = defaultState, action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({
                ...payload.comment,
                id: randomId
            }))

        case LOAD_ARTICLE_COMMENTS + START:
            return state.setIn(['loading', payload.articleId], true)

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
        {
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))
                .setIn(['loading', payload.articleId], false)
                .setIn(['loaded', payload.articleId], true)
        }
    }

    return state
}