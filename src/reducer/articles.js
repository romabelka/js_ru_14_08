import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap} from './utils'
import {Map, fromJS, Record} from 'immutable'

const ArticleRecord = Record({
    id: null,
    title: null,
    text: null,
    date: null,
    comments: []
})

const defaultState = new Map(arrToMap(defaultArticles, ArticleRecord))

export default (state = defaultState, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.delete(payload.id)

        case ADD_COMMENT:
            return state.updateIn([payload.articleId, 'comments'], comments => comments.concat(randomId))
/*
            const article = state[payload.articleId]
            return {...state, [payload.articleId]: {
                ...article,
                comments: (article.comments || []).concat(randomId)
            }}
*/
    }

    return state
}