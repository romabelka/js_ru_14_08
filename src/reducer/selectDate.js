import {SELECT_ARTICLE_DATE} from '../constance'

export default (defoultSelect = false, action) => {
  const {type, payload} = action
  switch (type) {
    case SELECT_ARTICLE_DATE:
      return payload
      break;
    default:
      return defoultSelect;
  }
}
