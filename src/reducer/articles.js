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
            let obj = {...articles}
            delete obj[payload.id]
            return obj
        // case: ADD_COMMENT:
        //     console.log(articles);
            // return
    }

    return articles
}
