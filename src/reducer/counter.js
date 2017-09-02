import {INCREMENT} from '../constance'

export default (state = 0, action) => {
  const {type} = action
  switch (type) {
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}
