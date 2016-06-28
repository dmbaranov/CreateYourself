import * as con from './constants.js'

export function onSpecializationClick(spec) {
	return dispatch => {
		dispatch({
			type: con.SPECIALIZATION_CLICK,
			payload: {
				value: spec
			}
		});
	}
}