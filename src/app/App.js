import React, { Component } from 'react'
// import './sentryConfig'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import MainPageRoute from './routes/MainPageRoute'
import IssuePageRoute from './routes/IssuePageRoute'
import NotFoundPage from './routes/NotFoundPageRoute'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={MainPageRoute}/>
            <Route path="/:username/:repositoryName/issues/:issueNumber" exact component={IssuePageRoute}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
