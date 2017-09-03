import { SELECTED_ARTICLES } from '../constants'

export default (selectedArticles = null, action) => {
    const { type, payload } = action

    switch (type) {
        case SELECTED_ARTICLES:
            return selectedArticles = payload.ids
    }

    return selectedArticles
}