import {articles as defaultArticles} from '../fixtures'
import { DELETE_ARTICLE } from '../constance'

export default (article = defaultArticles, action) => {
  const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return article.filter(article => article.id !== payload.id)
    }
  return article
}
