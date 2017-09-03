import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dateFilter from './dateFilter'
import selectFilter from './selectFilter'

export default combineReducers({
    counter: counterReducer,
    articles,
    dateFilter,
    selectFilter
})