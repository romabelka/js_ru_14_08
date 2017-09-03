import { SELECTED_DATE } from '../constants'

export default (selectedDate = {}, action) => {
    const { type, payload } = action

    switch (type) {
        case SELECTED_DATE:
            return selectedDate = payload.date
    }

    return selectedDate
}