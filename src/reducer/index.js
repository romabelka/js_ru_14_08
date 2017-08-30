import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectedArticles from './selectedArticles'
import dateRange from './dateRange'

export default combineReducers({
    counter: counterReducer,
    articles,
    selectedArticles,
    dateRange
})