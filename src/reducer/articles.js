import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles} from '../fixtures'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]:article
}), {})

export default (articles = defaultArticles, action) => {
    const { type, payload } = action
    console.log('--- articles ---', articles);
    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
        
        case ADD_COMMENT:
            console.log(payload);
            const articleId = '56c782f1a2c2c3268ddb3206',
            //payload.articleId,
             commentId = payload.id

             articles[articleId].comments.push(commentId) 
            
             return articles
    }

    return articles
}