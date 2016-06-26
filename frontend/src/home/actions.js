import * as con from './constants.js'

export function onProfessionClick(prof) {
	return dispatch => {
		dispatch({
			type: con.PROFESSION_BUTTON_CLICK,
			payload: {
				profession: prof
			}
		});
	}
}