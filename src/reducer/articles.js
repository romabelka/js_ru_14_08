import { DELETE_ARTICLE, SUBMIT_NEW_COMMENT } from '../constants'
import {normalizedArticles} from '../fixtures'
import {Map} from 'immutable'

const defaultArticles = Map(normalizedArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {}))

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)

        case SUBMIT_NEW_COMMENT:
        {
            const {articleId} = payload
            const commentId = action.id

            const article = articles.get(articleId)
            const comments = [...article.comments, commentId];

            return articles.set(articleId, {
                ...article,
                comments
            })

        }
    }

    return articles
}