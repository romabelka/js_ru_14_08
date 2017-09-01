import {FILTER, DELETE_ARTICLE} from '../constants'
import {articles as defaultArticles} from '../fixtures'

export default (state = {
    select: {
        articles: defaultArticles,
        selected: []
    },
    dateRange: {
        from: '',
        to: ''
    }
}, action) => {

    const {type, payload} = action
    switch (type) {
        case FILTER:
            return {
                select: {
                    articles: defaultArticles,
                    selected: payload.selected
                },
                dateRange: {
                    from: payload.from,
                    to: payload.to
                }
            }
        case DELETE_ARTICLE:
            return {
                select: {
                    articles: defaultArticles,
                    selected: state.select.selected.filter(id => payload.id !== id)
                },
                dateRange: state.dateRange
            }
    }

    return state
}