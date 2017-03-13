import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './rootReducer'
import rootEpic from './rootEpic'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      createEpicMiddleware(rootEpic),
    )
  ),
)

export default store
