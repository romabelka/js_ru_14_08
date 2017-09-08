import { SELECTED_DATE, SELECTED_ARTICLE } from '../constants'

const DEFAULT_FILTERS = {
  dateRange: { from: null, to: null },
  selected: []
}

export default (filters = DEFAULT_FILTERS, action) => {  
      
    const {type, payload} = action    

    switch (type) {
        case SELECTED_DATE:
            return {
              ...filters,
              dateRange: payload.dateRange
            }
        case SELECTED_ARTICLE:
            return {
                ...filters,
                selected: payload.selected
            }
    }

    return filters
}