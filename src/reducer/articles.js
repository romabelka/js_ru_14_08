import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap}  from './utils'
import {Map, fromJS, Record} from 'immutable'

const ArticleRecord = Record({
    id: null,
    title: null,
    text: null,
    date: null,
    comments: []
})

const defaultState = new Map(arrToMap(defaultArticles, ArticleRecord))

export default (articles = defaultState, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.delete(payload.id)
    }

    switch (type){
        case ADD_COMMENT:
             return state.updateIn([payload.articleId, 'comments'], comments => comments.concat(randomId))
    }

    return articles
}