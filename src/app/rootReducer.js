import { combineReducers } from 'redux'
// reducer of the form from the MainPage
import { reducer as reduxFormReducer } from 'redux-form'
// reducer for managing the entiies
import ormReducer from 'code/data/reducer'

import { mainPageReducer } from 'code/pages/MainPage'

import { issuePageReducer } from 'code/pages/IssuePage'

export default combineReducers({
  form: reduxFormReducer,
  // mainPage: formReducer,
  mainPage: mainPageReducer,
  issuePage: issuePageReducer,
  // data: dataReducer,
  orm: ormReducer,
})
