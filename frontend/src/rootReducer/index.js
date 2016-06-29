import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import home from '../home/reducer'
import profession from '../profession/reducer'
import profDesc from '../professionDescription/reducer'
import profMap from '../professionMap/reducer'


export default combineReducers({
	home,
	profession,
	profDesc,
	profMap,
	routing: routerReducer
});
