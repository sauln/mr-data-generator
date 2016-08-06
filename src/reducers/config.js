import { combineReducers } from 'redux'

import showJsonWindow from './config/show-json-window'
import chartDimensions from './config/chartDimensions'
import labels from './config/labels'
import spreadPoints from './config/spread-points'

export default combineReducers({
	showJsonWindow,
	chartDimensions,
	labels,
	spreadPoints
})
