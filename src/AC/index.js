import {INCREMENT, DELETE_ARTICLE, SET_DATE, SET_ARTICLES} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function setDate(payload) {
    return {
        type: SET_DATE,
        payload,
    }
}

export function setArticles(payload) {
    return {
        type: SET_ARTICLES,
        payload,
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}
