import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles} from '../fixtures'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return Object.keys(articles).filter(id => id !== payload.id).reduce((acc, id) => ({
                ...acc,
                [id]:articles[id]}), {});

        case ADD_COMMENT:

            const newComments = articles[payload.articleId].comments.concat(payload.comment.id)
            const newArticle = Object.assign({}, articles[payload.articleId], {comments: newComments})
            return Object.assign({}, articles, {[payload.articleId]:newArticle})
    }

    return articles
}