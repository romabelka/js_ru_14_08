import {SELECT_ARTICLE_ID} from '../constance'

export default (defoultSelect = false, action) => {
  const {type, payload} = action
  switch (type) {
    case SELECT_ARTICLE_ID:
      return payload
      break;
    default:
    return defoultSelect
  }
}
