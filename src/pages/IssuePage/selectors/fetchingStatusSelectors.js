import { createSelector } from 'reselect'

const fetchingIssueStatusSelector = createSelector(
  state => state.issuePage.ui.issueStatus.fetching,
  status => status,
)

const fetchingCommentsStatusSelector = createSelector(
  state => state.issuePage.ui.commentsStatus.fetching,
  status => status,
)

const fetchingRepoStatusSelector = createSelector(
  state => state.issuePage.ui.repoStatus.fetching,
  status => status
)

export { fetchingIssueStatusSelector,
         fetchingCommentsStatusSelector,
         fetchingRepoStatusSelector,
       }
