import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dateRange from './daterange';

export default combineReducers({
  counter: counterReducer,
  articles,
  dateRange,
})