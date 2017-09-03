import {INCREMENT, DELETE_ARTICLE, SELECTED_ARTICLES, SELECTED_DATE} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectedArticles(ids) {
    return {
        type: SELECTED_ARTICLES,
        payload: { ids }
    }
}

export function selectedDate(date) {
    return {
        type: SELECTED_DATE,
        payload: { date }
    }
}