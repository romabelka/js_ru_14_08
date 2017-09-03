import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dateRange from './dateRange'

export default combineReducers({
    counter: counterReducer,
    articles,
    dateRange
})