import { connect } from 'react-redux'
import * as actionCreators from 'code/pages/IssuePage/actions'

// selectors
// data selectors
import { issueSelector } from 'code/data/selectors'
// fetching errors (error status code)
import { fetchRepoErrorStatusCodeSelector,
         fetchIssueErrorStatusCodeSelector,
         fetchCommentsErrorStatusCodeSelector,
       } from 'code/pages/IssuePage/selectors/fetchingErrorSelectors'
// fetching status (true/false)
import { fetchingIssueStatusSelector,
         fetchingCommentsStatusSelector,
         fetchingRepoStatusSelector,
       } from 'code/pages/IssuePage/selectors/fetchingStatusSelectors'

function mapStateToProps(state, ownProps) {
  let issue = issueSelector(state, ownProps.fetchParams)

  const fetchingErrors = {
    fetchRepoErrorStatusCode: fetchRepoErrorStatusCodeSelector(state),
    fetchIssueErrorStatusCode: fetchIssueErrorStatusCodeSelector(state),
    fetchCommentsErrorStatusCode: fetchCommentsErrorStatusCodeSelector(state),
  }

  const fetchingStatus = {
    issueStatus: fetchingIssueStatusSelector(state),
    commentsStatus: fetchingCommentsStatusSelector(state),
    repoStatus: fetchingRepoStatusSelector(state),
  }
  // if issue is come from the store or has been already fetched
  if (issue)
  {
    return {
      issue,
      fetchingErrors,
      fetchingStatus,
    }
  }

  return {
    issue: null,
    fetchingErrors,
    fetchingStatus,
  }
}

export default connect(mapStateToProps, actionCreators)
