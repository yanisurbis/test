import R from 'ramda'

import * as constants from '../constants'

const initialUIstatus = {
  fetching: false,
  errorStatusCode: null,
}

const initialState = {
  // fetching list of repositories
  // choose user -> fetching reps of this user
  reposStatus: initialUIstatus,
  // fetching list of issues
  // now we have reps, choose rep -> fetching issues
  issuesStatus: initialUIstatus,
}

// toggle fetching field
function makeFetchingTrue(status) {
  return {
    ...status,
    fetching: true,
  }
}

function makeFetchingFalse(status) {
  return {
    ...status,
    fetching: false,
  }
}

function addError(status, errorStatusCode) {
  return {
    ...status,
    errorStatusCode,
  }
}

function clearError(status) {
  return {
    ...status,
    errorStatusCode: null,
  }
}

function uiReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case constants.FETCH_REPOS:
      return {
        ...state,
        reposStatus: R.compose(makeFetchingTrue, clearError)(state.reposStatus),
      }
    case constants.FETCH_ISSUES:
      return {
        ...state,
        issuesStatus: R.compose(makeFetchingTrue, clearError)(state.issuesStatus),
      }
    case constants.FETCH_REPOS_FULFILLED:
      return {
        ...state,
        reposStatus: makeFetchingFalse(state.reposStatus),
      }
    // we recieved issues
    case constants.FETCH_ISSUES_FULFILLED:
      return {
        ...state,
        issuesStatus: makeFetchingFalse(state.issuesStatus),
      }
    case constants.FETCH_ISSUES_REJECTED:
      return {
        ...state,
        issuesStatus: R.compose(makeFetchingFalse, addError)(state.issuesStatus, payload.status)
      }
    case constants.FETCH_REPOS_REJECTED:
      return {
        ...state,
        reposStatus: R.compose(makeFetchingFalse, addError)(state.reposStatus, payload.status)
      }
    case constants.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}

export default uiReducer
