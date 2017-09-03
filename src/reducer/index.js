import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selected from './selected'
import dates from './dates'

export default combineReducers({
    counter: counterReducer,
    articles,
    selected,
    dates
})