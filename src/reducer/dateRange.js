import { CHANGE_DATE_RANGE } from '../constants'

const initRange = {from: null, to: null};

export default (dateRange = initRange, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_DATE_RANGE:
            return payload.newDateRange
    }

    return dateRange;
}