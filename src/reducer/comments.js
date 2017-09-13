import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, START, LOAD_ALL_COMMENTS } from '../constants'
import {arrToMap} from './utils'
import {OrderedMap, Record, Set} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    commentsChunks: new OrderedMap({}),
    loading:false,
    //loaded:false
})


export default (state = new ReducerState(), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

            case LOAD_ALL_COMMENTS + START:
            return state.set('loading', true)

            case LOAD_ALL_COMMENTS + SUCCESS:
            return state.setIn(['commentsChunks', payload.page], arrToMap(response.records, CommentRecord)).set('loading', false)
    }

    return state
}