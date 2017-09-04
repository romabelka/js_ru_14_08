import {INCREMENT, DELETE_ARTICLE, FILTER_ARTICLE} from '../constants'

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

export function selectArticles(selectedArticles) {
    return {
        type: FILTER_ARTICLE,
        payload: { selectedArticles }
    }
}

export function selectRange(range) {
    return {
        type: FILTER_ARTICLE,
        payload: { dateRange: range }
    }
}