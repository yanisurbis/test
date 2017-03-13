import { combineReducers } from 'redux'

import uiReducer from './reducers/ui'

export default combineReducers({
  ui: uiReducer,
})
