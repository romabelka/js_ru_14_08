import {DELETE_ARTICLE, CHANGE_DATE_RANGE, SELECT_ARTICLES} from '../constants'
import {articles as defaultArticles} from '../fixtures'

export default (articles = defaultArticles, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id);
        case CHANGE_DATE_RANGE:
            return defaultArticles.filter(article => {
                const {from, to} = payload.newDateRange;
                const date = new Date(article.date);
                const gteFrom = from ? date.getTime() >= from.getTime() : true;
                const lteTo = to ? date.getTime() <= to.getTime() : true;
                return gteFrom && lteTo;
            });
        case SELECT_ARTICLES:
            if(!payload.newSelectedArticles || payload.newSelectedArticles.length === 0) return defaultArticles;
            const ids = payload.newSelectedArticles.map(a => a.value);
            return defaultArticles.filter(article => ids.includes(article.id));
    }

    return articles
}