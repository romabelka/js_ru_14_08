import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dateRange from './dateRange'
import selectArticles from './selectArticles'
import filtersArticles from './filtersArticles'

export default combineReducers({
    counter: counterReducer,
    articles,
    dateRange,
    selectedArticles : selectArticles,
    filtersArticles
})