import {INCREMENT, DELETE_ARTICLE, DATE_RANGE} from '../constants';

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: {id}
  }
}

export function dateRange(range) {
  return {
    type: DATE_RANGE,
    payload: range,
  }
}

