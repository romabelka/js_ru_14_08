import {ADD_COMMENT, COMMENTS_ARR, FAIL, LOAD_COMMENTS, START, SUCCESS} from '../constants'
import {arrToMap} from './utils'
import { Map, Record } from 'immutable'

let CommentRecord = Record({
    id: null,
    user: null,
    text: null
});

let AjaxCommentWrapper = Record({
    loaded: null,
    loading: null,
    [COMMENTS_ARR]: arrToMap([], CommentRecord)
});

export default (state = new AjaxCommentWrapper(), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(
                [COMMENTS_ARR, randomId],
                new CommentRecord({
                    ...payload.comment,
                    id: randomId
                })
            );
        case LOAD_COMMENTS + START:
            console.log('–––> START TO LOAD COMMENTS', response, action);
            return state.setIn(['loading'], true)
                        .setIn(['loaded'], false);
        case LOAD_COMMENTS + SUCCESS:
            console.log('–––> LOAD COMMENTS :) SUCCESS', response, action);
            return state.mergeIn(['data'], arrToMap(response, CommentRecord))
                        .setIn(['loading'], false)
                        .setIn(['loaded'], true);

        case LOAD_COMMENTS + FAIL:
            console.log('–––> LOAD COMMENTS :( FAIL', response, action);
            return state.setIn(['loading'], false)
                        .setIn(['loaded'], false);
    }

    return state
}