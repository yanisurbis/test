import R from 'ramda'

import * as constants from '../constants'

const initialUIstatus = {
  fetching: false,
  errorStatusCode: null,
}

const initialState = {
  repoStatus: initialUIstatus,
  // choose issue -> issue full page (with description & comments)
  issueStatus: initialUIstatus,
  // Loading comments status, initially loaded only issue, then comments are loaded
  commentsStatus: initialUIstatus,
}

function uiReducer(state = initialState, action) {
  switch (action.type) {
    // -----------------------------------------------------------------
    case constants.FETCH_REPO:
      return {
        ...state,
        repoStatus: R.compose(makeFetchingTrue, clearError)(state.repoStatus),
      }
    case constants.FETCH_REPO_FULFILLED:
      return {
        ...state,
        repoStatus: makeFetchingFalse(state.repoStatus),
      }
    case constants.FETCH_REPO_REJECTED:
      return {
        ...state,
        // sent error status
        repoStatus: R.compose(makeFetchingFalse, addError)(state.repoStatus, action.payload.status)
      }

    // -----------------------------------------------------------------
    case constants.FETCH_ISSUE:
      return {
        ...state,
        issueStatus: R.compose(makeFetchingTrue, clearError)(state.issueStatus),
      }
    case constants.FETCH_ISSUE_WITH_BUFFER:
      return {
        ...state,
        issueStatus: R.compose(makeFetchingTrue, clearError)(state.issueStatus),
      }
    case constants.FETCH_ISSUE_FULFILLED:
      return {
        ...state,
        issueStatus: makeFetchingFalse(state.issueStatus),
      }
    case constants.FETCH_ISSUE_REJECTED:
      return {
        ...state,
        issueStatus: R.compose(makeFetchingFalse, addError)(state.issueStatus, action.payload.status)
      }

    // -----------------------------------------------------------------
    case constants.FETCH_COMMENTS:
      return {
        ...state,
        commentsStatus: R.compose(makeFetchingTrue, clearError)(state.commentsStatus),
      }
    case constants.FETCH_COMMENTS_WITH_BUFFER:
      return {
        ...state,
        commentsStatus: R.compose(makeFetchingTrue, clearError)(state.commentsStatus),
      }
    // we recieved issues
    case constants.FETCH_COMMENTS_FULFILLED:
      return {
        ...state,
        commentsStatus: makeFetchingFalse(state.commentsStatus),
      }
    case constants.FETCH_COMMENTS_REJECTED:
      return {
        ...state,
        commentsStatus: R.compose(makeFetchingFalse, addError)(state.commentsStatus, action.payload.status)
      }
    default:
      return state
  }
}

// TODO:? export is hoisted?
export default uiReducer

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
