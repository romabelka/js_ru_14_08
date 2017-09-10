import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS } from '../constants'
// import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import {Record} from 'immutable'

const commentRecord = Record({
    id: null,
    user: null,
    text: null,
})

const ReducerRecord = Record({
    entities: arrToMap([], commentRecord),
    loading: false,
    loaded: false
})

const initialState = new ReducerRecord()

export default (state = initialState, action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], {
                ...payload.comment,
                id: randomId
            })

        case LOAD_ALL_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state
                .set('entities', arrToMap(response.records, commentRecord))
                .set('loading', false)
                .set('loaded', true)

    }

    return state
}
