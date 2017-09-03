import { SELECTED_DATE } from '../constants'

export default (state = { from: null, to: null }, action) => {  
  
    const {type, payload} = action    

    switch (type) {
        case SELECTED_DATE:
            return {
              from: payload.from,
              to: payload.to
            }
    }

    return state
}