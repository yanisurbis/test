const KEYS = `client_id=5282f54ab5c2133c39ed&client_secret=36e87d3208a6aea0d8bc99c0eb2eccf9ef8a5b27`
const USERS = `https://api.github.com/users`
const REPOS = `https://api.github.com/repos`

export const urlToFetchRepos = username => `${USERS}/${username}/repos?${KEYS}`

export const urlToFetchRepo = (username, repositoryName) => `${REPOS}/${username}/${repositoryName}`

export const urlToFetchIssues = (username, repositoryName, issuesPerPage = '6', pageNumber) =>
      `${REPOS}/${username}`
      + `/${repositoryName}/issues?page=${pageNumber}&per_page=${issuesPerPage}&state=all&${KEYS}`

export const urlToFetchIssue = (username, repositoryName, issueNumber) =>
      `${REPOS}/${username}/${repositoryName}/issues/${issueNumber}?${KEYS}`

export const urlToFetchComments = (username, repositoryName, issueNumber) =>
      `${REPOS}/${username}/${repositoryName}/issues/${issueNumber}/comments?${KEYS}`
