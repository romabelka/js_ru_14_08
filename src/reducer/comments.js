import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS, SUCCESS, START  } from '../constants'
import { arrToMap } from './utils'
import { OrderedMap, Record, Set } from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const CommentPage = Record({
    id: null,
    commentIds: [],
    loading: false
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    commentPages: new OrderedMap({}),
    totalComments: 0
})


export default (state = new ReducerState(), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({ ...payload.comment, id: randomId }))
        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))
        case LOAD_COMMENTS + START:
            console.log('============', LOAD_COMMENTS + START);
            console.log('============', payload.page);
            return state
                .mergeIn(['commentPages'], arrToMap([{ id: payload.page, commentIds: [], loading: true}], CommentPage));
        case LOAD_COMMENTS + SUCCESS:
            console.log('============', LOAD_COMMENTS + SUCCESS);
            return state
                .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                .mergeIn(['commentPages'], arrToMap([{ id: payload.page, commentIds: response.records.map(function (record) { return record.id }), loading: false }], CommentPage))
                .set('totalComments', response.total);
    }

    return state
}