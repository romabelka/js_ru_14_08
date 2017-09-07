import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import comments from './comments'
import filters from './filters'
import newComments from './newComments'

export default combineReducers({
    counter: counterReducer,
    articles, comments, filters, newComments
})