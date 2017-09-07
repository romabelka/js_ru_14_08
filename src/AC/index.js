import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, CHANGE_NEW_COMMENT, ADD_COMMENT} from '../constants'

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

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function changeNewComment(articleId, newComment) {
    return {
        type: CHANGE_NEW_COMMENT,
        payload: {
            articleId,
            newComment
        }
    }
}

export function addComment(articleId, newComment) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId,
            newComment
        }
    }
}
