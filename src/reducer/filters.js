import {FILTER_ARTICLE} from '../constants'
import {articles as defaultArticles} from '../fixtures'

export default(filters = {
    dateRange: {
        from: null,
        to: null
    },
    selectedArticles: []
}, action) => {
    const {type, payload} = action

    switch (type) {
        case FILTER_ARTICLE:
            let filtersUpdate = {};
            filtersUpdate.dateRange = payload.dateRange || filters.dateRange
            filtersUpdate.selectedArticles = payload.selectedArticles || filters.selectedArticles

            return filtersUpdate
    }

    return filters
}