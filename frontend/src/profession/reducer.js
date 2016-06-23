import * as con from './constants.js'

const initialState = {
	dataToShow: [],
	profession: '',
	title: '',
	listOfDocuments: [],
	listOfCourses: []
};

export default function home(state = initialState, action) {
	switch (action.type) {

		case con.PROFESSION_BUTTON_CLICK:
			return { ...state, profession: action.payload.profession, title: action.payload.title, dataToShow: action.payload.dataToShow }

		case con.CHANGE_DATA_TO_SHOW:
			return { ...state, dataToShow: action.payload.data }

		default: {
			return state;
		}
		
	}
}