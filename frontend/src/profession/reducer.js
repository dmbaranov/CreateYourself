import * as con from './constants.js'

const initialState = {
	specialization: ''
};

export default function profession(state = initialState, action) {
	switch (action.type) {

		case con.SPECIALIZATION_CLICK:
			return { ...state, specialization: action.payload.value }

		default:
			return state;

	}
}