import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    const {type, payload} = action
    switch (type) {
        case ADD_COMMENT: {
            const S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1)

            const id = S4()+S4()+S4()

            const newPayload = {...payload, newComment: {...payload.newComment, id}}
            next({...action, payload: newPayload})

            return
        }
    }

    next(action)
}