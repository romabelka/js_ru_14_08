import {INCREMENT, DELETE_ARTICLE, FILTER_TITLE, FILTER_DATE} from '../constants'

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

export function setFilterTitle(selected) {
    return {
        type: FILTER_TITLE,
        payload: { selected }
    }
}

export function setFilterDate(date) {
    return {
        type: FILTER_DATE,
        payload: { date }
    }
}