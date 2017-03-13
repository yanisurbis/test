import { createSelector } from 'reselect'

const fetchRepoErrorStatusCodeSelector = createSelector(
  state => state.issuePage.ui.repoStatus.errorStatusCode,
  error => error,
);

// TODO:? why
const fetchIssueErrorStatusCodeSelector = createSelector(
  state => state.issuePage.ui.issueStatus.errorStatusCode,
  error => error
)

const fetchCommentsErrorStatusCodeSelector = createSelector(
  state => state.issuePage.ui.commentsStatus.errorStatusCode,
  error => error
)

export { fetchRepoErrorStatusCodeSelector,
         fetchIssueErrorStatusCodeSelector,
         fetchCommentsErrorStatusCodeSelector,
       }
