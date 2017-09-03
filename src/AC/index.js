import {INCREMENT, DELETE_ARTICLE, PICK_DATE, SELECT_ARTICLE} from '../constants'

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

export function selectArticle(selectedArray) {
    return {
        type: SELECT_ARTICLE,
        payload: selectedArray
    }
}

export function pickDate(fromToData) {
    return {
        type: PICK_DATE,
        payload: fromToData
    }
}