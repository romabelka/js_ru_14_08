import {combineReducers} from 'redux'
import counterReducer from './counter'
import article from './article'
import filter from './filter'


export default combineReducers({
  counter: counterReducer,
  article,
  filter
})
