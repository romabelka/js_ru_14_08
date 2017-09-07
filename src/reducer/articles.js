import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles} from '../fixtures'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE: {
            let newArticles = {...articles}
            //newArticles[payload.id] = articles[payload.id]
            delete newArticles[payload.id]

            return newArticles
        }
        case ADD_COMMENT: {
            let comments = (articles[payload.articleId].comments) ? articles[payload.articleId].comments.slice() : []
            comments.push(payload.newComment.id);

            return {...articles, [payload.articleId]: {...articles[payload.articleId], comments}}
        }
    }

    return articles
}