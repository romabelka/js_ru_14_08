import {DELETE_ARTICLE, SET_VISIBILITY_FILTER} from '../constants'
import {articles as defaultArticles} from '../fixtures'

export default(articles = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
        case SET_VISIBILITY_FILTER:
            const {selectedArticles, dateRange} = store.getState()
                const ids = selectedArticles.map(el => el.value)
                    const filteredSelect = defaultArticles.filter(article => ids && ids.length
                            ? ids.includes(article.id)
                            : article)
                        const to = Date.parse(dateRange.to),
                            from = Date.parse(dateRange.from)
                            const filteredRange = defaultArticles.filter(article => {
                                let result = from ? Date.parse(article.date) >= from : true;
                                return to ? result && Date.parse(article.date) <= to : result;
                            })
                            return filteredRange.filter(el=>filteredSelect.map(el=>el.id).includes(el.id))
                    }

                    return articles
                }