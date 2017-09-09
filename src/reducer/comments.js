import { ADD_COMMENT } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import {Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

const defaultComments = arrToMap(normalizedComments, CommentRecord)

export default (state = defaultComments, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set([randomId], {
                ...payload.comment,
                id: randomId
            })
    }

    return state
}