import * as constants from './constants'

export function fetchIssues(username, repositoryName, issuesPerPage) {
  return {
    type: constants.FETCH_ISSUES,
    payload: {
      username,
      repositoryName,
      issuesPerPage,
    }
  }
}

// we want to clear previously fetched data (issues, users)
export function clearData() {
  return {
    type: constants.CLEAR_DATA,
  }
}

export function clearIssuesComments(username, repositoryName) {
  return {
    type: constants.CLEAR_ISSUES_COMMENTS,
    payload: {
      username,
      repositoryName,
    }
  }
}

export function fetchRepos(username) {
  return {
    type: constants.FETCH_REPOS,
    payload: {
      username: username
    }
  }
}
