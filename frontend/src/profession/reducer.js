import * as con from './constants.js'

const initialState = {
	profession: '',
	title: ''
};

export default function profession(state = initialState, action) {
	switch (action.type) {

		case con.SPECIALIZATION_CLICK:
			return { ...state, profession: action.payload.profession, title: action.payload.title }

		default:
			return state;

	}
}