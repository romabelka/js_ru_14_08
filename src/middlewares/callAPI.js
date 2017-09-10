import {START, SUCCESS, FAIL, LOAD_COMMENTS} from '../constants'

export default store => next => action => {
    const {callAPI, type, ...rest} = action

    if (!callAPI) return next(action)

    if (action.type === LOAD_COMMENTS && store.getState().comments.loaded) {
        return next(action)
    }

    next({
        ...rest,
        type: type + START
    })


    //dev only!!!!
    setTimeout(() => fetch(callAPI)
        .then(res => res.json())
        .then(response => next({...rest, type: type + SUCCESS, response}))
        .catch(error => next({...rest, type: type + FAIL, error}))
    , 1000)
}