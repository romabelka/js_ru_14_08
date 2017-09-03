import {DATE_RANGE} from '../constants';

export default (state = {}, action) => {
  const {type} = action;
  switch (type) {
    case DATE_RANGE:
      return action;
  }
  return state;
}