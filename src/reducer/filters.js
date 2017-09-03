import { FILTER_ARTICLE } from '../constants'

const defaultFilters = {
    selected: [],
    from: null,
    to: null
};

export default (filters = defaultFilters, action) => {
    const { type, payload } = action;

    switch (type) {
        case FILTER_ARTICLE: {
            return Object.assign({}, filters, payload);
        }
    }

    return filters
}