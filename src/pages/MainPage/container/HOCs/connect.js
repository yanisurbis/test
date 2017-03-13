import { connect } from 'react-redux'

import * as actionCreators from 'code/pages/MainPage/actions'

// selectors
import { reposSelector,
         issuesSelector
       } from 'code/data/selectors'
import { fetchIssuesErrorStatusCodeSelector,
         fetchReposErrorStatusCodeSelector
       } from 'code/pages/MainPage/selectors/fetchingErrorStatusCodeSelectors'
import { fetchingReposStatus,
         fetchingIssuesStatus
       } from 'code/pages/MainPage/selectors/fetchingStatusSelectors'
import { usernameSelector,
         repositoryNameSelector,
         issuesPerPageSelector,
       } from 'code/pages/MainPage/selectors/formValueSelectors'

function mapStateToProps(state) {
  // select from form
  const username       = usernameSelector(state)
  const repositoryName = repositoryNameSelector(state)
  const issuesPerPage  = issuesPerPageSelector(state)

  // array of strings
  const reposNames = reposSelector(state, username)

  const issues = issuesSelector(state, username, repositoryName)

  const fetchingErrors = {
    fetchReposErrorStatusCode: fetchReposErrorStatusCodeSelector(state),
    fetchIssuesErrorStatusCode: fetchIssuesErrorStatusCodeSelector(state),
  }

  const fetchingStatus = {
    fetchingRepos: fetchingReposStatus(state),
    fetchingIssues: fetchingIssuesStatus(state),
  }

  return {
    state,
    reposNames,
    issues,

    username,
    repositoryName,
    issuesPerPage,

    fetchingStatus,
    fetchingErrors,
  }
}

export default connect(mapStateToProps, actionCreators)
