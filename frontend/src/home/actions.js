import * as con from './constants.js'

export function setProfession(profession, title) {
	return dispatch => {
		dispatch({
			type: con.PROFESSION_BUTTON_CLICK,
			payload: {
				profession: profession,
				title: title
			}
		});
	}
}