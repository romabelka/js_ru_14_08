import { SELECTED_ARTICLE } from '../constants'

export default (state = [], action) => {
  
    const {type, payload} = action

    
    switch (type) {
        case SELECTED_ARTICLE:
            return payload.selected
    }

    return state
}