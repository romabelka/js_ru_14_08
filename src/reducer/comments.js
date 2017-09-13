import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, LOAD_COMMENTS_QUANTITY, LOAD_COMMENTS } from '../constants'
import {arrToMap} from './utils'
import {OrderedMap, Record, Set} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    total: null,
    limit: 5,
    offset: []
})


export default (state = new ReducerState(), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_COMMENTS_QUANTITY + SUCCESS:
            return state.updateIn(['total'], value => response.total)

        case LOAD_COMMENTS + SUCCESS:
            console.log('RESP', response);
            return state.mergeIn(['entities'], arrToMap(response.records, CommentRecord))
    }

    return state
}
