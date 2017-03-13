import { createSelector } from 'redux-orm'
import orm from '../orm'

import selectIssue from './IssuePage/selectIssue'

import selectRepos from './MainPage/selectRepos'
import selectIssues from './MainPage/selectIssues'

// fabric
const createMySelector = function(...selectors) {
  const originalSelector = createSelector(orm, ...selectors)
  return (state, ...args) => originalSelector(state.orm, ...args)
}

// select the issue based on router's params
const issueSelector = createMySelector(selectIssue)

// all repositories of the user by USERNAME
// стараемся отдать как можно меньше данных
const reposSelector = createMySelector(selectRepos)


// all repositories of the user by USERNAME
// стараемся отдать как можно меньше данных
const issuesSelector = createMySelector(selectIssues)

export { issuesSelector, reposSelector, issueSelector }
