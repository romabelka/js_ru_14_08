import { SELECT_ARTICLES } from '../constants'


export default (selectedArticles = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case SELECT_ARTICLES:
            return payload.newSelectedArticles
    }

    return selectedArticles;
}