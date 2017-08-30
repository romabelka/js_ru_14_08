import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLES, SELECT_RANGE, SET_VISIBILITY_FILTER} from '../constants'

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

export function selectArticles(selected) {
    return {
        type: SELECT_ARTICLES,
        payload: { selected }
    }
}

export function selectRange(range) {
    return {
        type: SELECT_RANGE,
        payload: { range }
    }
}

export const setVisibilityFilter = () => {
    return {
      type: SET_VISIBILITY_FILTER
    }
  }