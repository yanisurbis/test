import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { username, password } from 'code/config/config'
import { login } from 'code/config/githubLogin'

import 'rxjs'

import MainPageRoute from 'code/app/routes/MainPageRoute'
import IssuePageRoute from 'code/app/routes/IssuePageRoute'
import NotFoundPage from 'code/app/routes/NotFoundPageRoute'

import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable';

// import rootReducer from 'code/app/rootReducer'
import rootEpic from 'code/app/rootEpic'

import { combineReducers } from 'redux'
// reducer of the form from the MainPage
import { reducer as reduxFormReducer } from 'redux-form'
// reducer for managing the entiies
import ormReducer from 'code/data/reducer'

import { mainPageReducer } from 'code/pages/MainPage'

import { issuePageReducer } from 'code/pages/IssuePage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Global.Auth
let TOKEN = null;

// Global.Apollo
const networkInterface = createNetworkInterface({ uri: 'https://api.github.com/graphql' });

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

    // Send the login token in the Authorization header
    req.options.headers.authorization = `Bearer ${TOKEN}`;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface,
  connectToDevTools: true
});

const rootReducer = combineReducers({
  form: reduxFormReducer,
  // mainPage: formReducer,
  mainPage: mainPageReducer,
  issuePage: issuePageReducer,
  // data: dataReducer,
  orm: ormReducer,
  apollo: client.reducer(),
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      createEpicMiddleware(rootEpic),
      client.middleware()
    )
  ),
)




class App extends Component {
  constructor() {
    super();
    this.state = { login: false };
  }

  componentDidMount() {
    if (username === 'xxx') {
      throw new Error('Please create a config.js your username and password.');
    }
    login(username, password).then(token => {
      TOKEN = token;
      this.setState({ login: true });
    });
    console.log("Did mount worked!")
  }

  render() {
    if(!this.state.login) {
      return <p>Login...</p>
    }

    return this.state.login
      ? (
        <ApolloProvider client={client} store={store}>
          <Router>
            <div>
              <Switch>
                <Route path="/" exact component={MainPageRoute}/>
                <Route path="/:username/:repositoryName/issues/:issueNumber" exact component={IssuePageRoute}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </div>
          </Router>
        </ApolloProvider>
      )
      : <p>Logging in...</p>;
  }
}

ReactDOM.render(
  <App />,
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

// QUESTION: reason ml
// QUESTION: key id

// QUESTION: why we work with graphql through setState
// QUESTION: what is akka
