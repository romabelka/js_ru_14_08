import {INCREMENT, DELETE_ARTICLE, SELECTED_ARTICLE} from '../constants'

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

export function selectedArticle(selected){
  return {
    type: SELECTED_ARTICLE,
    payload: { selected }
  }
}