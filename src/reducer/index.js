import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectedArticles from './selectedArticles'
import selectedDate from './selectedDate'

export default combineReducers({
    counter: counterReducer,
    articles,
    selectedArticles,
    selectedDate
})