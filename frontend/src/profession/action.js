import * as con from './constants.js'

export function setProfession(profButton) {
	return dispatch => {
		let nextProfessions = [];
	
		if (typeof profButton.subProfessions !== 'undefined') {
			nextProfessions = profButton.subProfessions
		}

		dispatch({
			type: con.PROFESSION_BUTTON_CLICK,
			payload: {
				profession: profButton.profession,
				title: profButton.title,
				dataToShow: nextProfessions
			}
		});
	}
}

export function changeDataToShow(newData) {
	return dispatch => {
		dispatch({
			type: con.CHANGE_DATA_TO_SHOW,
			payload: {
				data: newData
			}
		});
	}
}