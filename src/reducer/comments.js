import { ADD_COMMENT, LOAD_COMMENTS, LOAD_ARTICLE, START, SUCCESS, FAIL } from '../constants'
import {arrToMap} from './utils'
import {Map, fromJS, Record, List} from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null,
    loading: false
})

const ReducerRecord = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false
})

const defaultState = new ReducerRecord()

export default (state = defaultState, action) => {
    const { type, payload, response } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', payload.id], new CommentRecord(payload))

        case LOAD_COMMENTS + START:

            if (state.loaded) {
                return state
            }

            return state.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            return state
                .set('entities', arrToMap(response, CommentRecord))
                .set('loading', false)
                .set('loaded', true)

        case LOAD_ARTICLE + SUCCESS:
            return state.set('loaded', false)
    }

    return state
}