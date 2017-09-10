import {ADD_COMMENT, FAIL, LOAD_COMMENTS, SUCCESS} from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import { Map, Record } from 'immutable'

export default (state = arrToMap(normalizedComments), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(
                [randomId],
                // TODO: попробовать Record;
                new Map({
                    ...payload.comment,
                    id: randomId
                })
            );
        //case LOAD_COMMENTS:
            //console.log('–––> LOAD_COMMENTS', payload);
            //return;
        case LOAD_COMMENTS + SUCCESS:
            console.log('–––> LOAD COMMENTS :) SUCCESS', payload);
            return state.mergeIn(arrToMap(response));
        case LOAD_COMMENTS + FAIL:
            console.log('–––> LOAD COMMENTS :( FAIL', payload);
            return state;
    }

    return state
}