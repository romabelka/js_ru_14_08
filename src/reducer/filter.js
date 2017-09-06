import {SELECT_ARTICLE_ID, SELECT_ARTICLE_DATE} from '../constance'

let defaultSelect = {
  selectedId: false,
  selectedDate: {
    from: false,
    to: false
  }
}

export default (selected = defaultSelect, action) => {
  console.log(selected);
  const {type, payload} = action
  switch (type) {
    case SELECT_ARTICLE_ID:
      return { ...selected, selectedId:payload.id}
      break;
    case SELECT_ARTICLE_DATE:
        let a = { ...selected, selectedDate:payload}
        return a
        break;
    default:
    return selected
  }
}
