import {FILTER_BY_SELECT, DELETE_ARTICLE} from '../constants'

export default (state = null, action) => {
	const {type, payload} = action
	switch (type) {
		case FILTER_BY_SELECT:
			return payload
		case DELETE_ARTICLE:
			return state.filter((option) => option.value !== payload.id)
	}

	return state
}