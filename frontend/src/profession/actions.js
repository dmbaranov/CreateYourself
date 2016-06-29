/* eslint-disable */
import * as con from './constants.js'

export function onSpecializationClick(profession, title) {
	return dispatch => {
		dispatch({
			type: con.SPECIALIZATION_CLICK,
			payload: {
				profession: profession,
				title: title
			}
		});
	}
}