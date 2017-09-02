import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE_ID, SELECT_ARTICLE_DATE} from '../constance'

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

export function selectArticleId(id) {
  return {
    type: SELECT_ARTICLE_ID,
    payload: id
  }
}

export function selectArticleDate(id) {
  return {
    type: SELECT_ARTICLE_DATE,
    payload: id
  }
}
