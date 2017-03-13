import { createSelector } from 'reselect'

const fetchingReposStatus = createSelector(
  state => state.mainPage.ui.reposStatus.fetching,
  status => status,
)

const fetchingIssuesStatus = createSelector(
  state => state.mainPage.ui.issuesStatus.fetching,
  status => status,
)

export { fetchingReposStatus,
         fetchingIssuesStatus,
       }
