import { combineReducers } from 'redux'

import uiReducer from './uiReducer'
import fetchParamsReducer from './fetchParamsReducer'

const reducers = {
  uiReducer,
  fetchParamsReducer,
}

// container level reducer
export default combineReducers({
  ui: uiReducer,
  fetchParams: fetchParamsReducer,
})

export {
  reducers
}
