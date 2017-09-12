import { ADD_COMMENT } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import {Map, fromJS, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null,
})

const ReducerRecord = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false
})

const defaultState = new ReducerRecord()

export default (state = defaultState, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return {...state, [randomId]: {
                ...payload.comment,
                id: randomId
            }}
    }

    return state
}