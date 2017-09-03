import { DELETE_ARTICLE, FILTER_BY_DATE, FILTER_BY_SELECT } from '../constants'
import {articles as defaultArticles} from '../fixtures'

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
      //   case FILTER_BY_DATE:
    		// const fromTime = payload.from ? payload.from.getTime() : null
    		// const toTime = payload.to ? payload.to.getTime() + 3600 * 24 * 1000 : null
      //   	return defaultArticles.filter(
      //   		(article) => {
      //   			if (article.date) {
      //   				const timestamp = new Date(article.date).getTime()
      //   				if (fromTime && toTime) {
						// 	return timestamp >= fromTime && timestamp < toTime 
      //   				} else if (fromTime) {
      //   					return timestamp >= fromTime
      //   				} else if (toTime) {
      //   					return timestamp <= toTime
      //   				}
      //   			}

      //   			return true
    		// 	}
      //   	)
        // case FILTER_BY_SELECT:
        //     if (!payload.length) {
        //         return defaultArticles
        //     }
            
        //     const filteredArticleIds = payload.map((selectOption) => selectOption.value)
        //     return defaultArticles.filter((article) => filteredArticleIds.includes(article.id))
    }

    return articles
}