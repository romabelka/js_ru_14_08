import {ADD_COMMENT} from '../constants'
import sh from 'shortid'

export default store => next => action => {
    if (action.type == ADD_COMMENT)
    {
        action.payload.id = sh.generate();
    }

    next(action)
}