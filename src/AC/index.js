import {INCREMENT, DELETE_ARTICLE, FILTER_BY_DATE, FILTER_BY_SELECT} from '../constants'

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

export function filterByDate(dateRange) {
	return {
		type: FILTER_BY_DATE,
		payload: dateRange
	}
}

export function filterBySelect(selected) {
    return {
        type: FILTER_BY_SELECT,
        payload: selected
    }
}