import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_PART_OF_COMMENTS, SUCCESS } from '../constants'
import {arrToMap} from './utils'
import {OrderedMap, Record, Set} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    total: null
})


export default (state = new ReducerState(), action) => {
    const { type, payload, response, randomId } = action
    console.log("RESPONSEEEEE",type);
    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_PART_OF_COMMENTS + SUCCESS: 
            //debugger
            //console.log("RESPONSEEEEE",response);
            return state.set('entities', arrToMap(response.records, CommentRecord)).set('total', response.total)
        
    }

    return state
}