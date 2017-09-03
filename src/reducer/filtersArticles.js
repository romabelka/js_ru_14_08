import {DELETE_ARTICLE, CHANGE_DATE_RANGE} from '../constants'
import {articles as defaultArticles} from '../fixtures'

export default (filtersArticles = defaultArticles, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return filtersArticles.filter(article => article.id !== payload.id);
    }

    return filtersArticles;
}