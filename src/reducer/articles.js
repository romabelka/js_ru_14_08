import { DELETE_ARTICLE, FILTER_SELECT_ARTICLE, FILTER_DATE_RANGE, FILTER } from '../constants'
import {articles as defaultArticles} from '../fixtures'
import moment from 'moment'

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)

        case FILTER: {
            const articles = defaultArticles.filter(article => {
                return payload.selected.indexOf(article.id) !== -1
            })

            return articles.filter(article => {
                return moment(article.date).isBetween(moment( payload.from), moment( payload.to))
            })
        }
    }

    return articles
}