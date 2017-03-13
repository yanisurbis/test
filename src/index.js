import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'rxjs'

import App from 'code/app/App'
import store from 'code/app/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// global tasks

// TODO: a lil bit of documentation
// TODO: test writing to DB
// TODO: test fixes

// BUG: ?sizes repositoryname

// IDEA: webpack2
// IDEA: tree shaking
// IDEA: storybook
