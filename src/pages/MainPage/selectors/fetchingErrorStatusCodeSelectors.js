import { createSelector } from 'reselect'

const fetchReposErrorStatusCodeSelector = createSelector(state => state.mainPage.ui.reposStatus.errorStatusCode, error => error)
const fetchIssuesErrorStatusCodeSelector = createSelector(state => state.mainPage.ui.issuesStatus.errorStatusCode, error => error)

export { fetchReposErrorStatusCodeSelector,
         fetchIssuesErrorStatusCodeSelector,
       }
