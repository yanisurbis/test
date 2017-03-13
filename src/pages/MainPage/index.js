import * as constants from './constants'
import * as actions from './actions'

import epics from './epics'

import * as selectors from './selectors'

import container from './container'

import reducer, {
  reducers as mainPageReducers
} from './reducers'

export {
  constants as mainPageConstants,
  actions as mainPageActions,
  epics as mainPageEpics,

  reducer as mainPageReducer,
  mainPageReducers,
  selectors,
  container as MainPageContainer,
}
