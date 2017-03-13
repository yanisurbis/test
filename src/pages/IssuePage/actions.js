import * as constants from './constants'

export function fetchIssueWithBuffer({ username, repositoryName, issueNumber }) {
  return {
    type: constants.FETCH_ISSUE_WITH_BUFFER,
    payload: {
      username,
      repositoryName,
      issueNumber,
    }
  }
}

// if we don't have current issue in store, then fetch repo
// with repo we get information about our user
// so later we can bind issue-user-comments inside our ORM
export function fetchRepo({ username, repositoryName }) {
  return {
    type: constants.FETCH_REPO,
    payload: {
      username,
      repositoryName,
    }
  }
}

export function fetchComments({ username, repositoryName, issueNumber }) {
  return {
    type: constants.FETCH_COMMENTS,
    payload: {
      username,
      repositoryName,
      issueNumber,
    }
  }
}

export function fetchCommentsWithBuffer({ username, repositoryName, issueNumber }) {
  return {
    type: constants.FETCH_COMMENTS_WITH_BUFFER,
    payload: {
      username,
      repositoryName,
      issueNumber,
    }
  }
}
