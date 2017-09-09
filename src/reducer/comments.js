import { ADD_COMMENT, LOAD_ALL_COMMENTS , SUCCESS, START } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import {Map, fromJS, Record} from 'immutable'


const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})
const ReducerRecord = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false
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
        case LOAD_ALL_COMMENTS + START:
        return state.set('loading', true)

    case LOAD_ALL_COMMENTS + SUCCESS:
        return state
            .set('entities', arrToMap(response.records, CommentRecord))
            .set('loading', false)
            .set('loaded', true)
    }

    return state
}