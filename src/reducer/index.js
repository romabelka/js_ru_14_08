import {combineReducers} from 'redux'
import counterReducer from './counter'
import article from './article'
import selectId from './selectId'
import selectDate from './selectDate'


export default combineReducers({
  counter: counterReducer,
  article,
  selectedID: selectId,
  selectDate: selectDate
})
