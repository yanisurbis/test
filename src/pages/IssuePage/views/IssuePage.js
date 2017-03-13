import React, { PropTypes as t } from 'react'
import { Segment, Grid } from 'semantic-ui-react'

// views
import CommentList from 'code/pages/IssuePage/views/CommentList/CommentList'
import IssuePageHeader from 'code/pages/IssuePage/views/IssuePageHeader'
import FullPageLoader from 'code/components/FullPageLoader'
import FullPageError from 'code/components/FullPageError'
import SmallError from 'code/components/SmallError'
import SmallLoader from 'code/components/SmallLoader'

import Center from 'code/components/grids/Center'
import ResponsiveWrapper from 'code/components/grids/ResponsiveWrapper'

function IssuePage(props) {
  const { issue, fetchingErrors, fetchingStatus } = props;
  let commentsPlusIssue
  // debugger

  if (issue === null) {
    const showLoader = (fetchingStatus.repoStatus === true) || (fetchingStatus.issueStatus === true)
    const showError = (fetchingErrors.fetchRepoErrorStatusCode !== null)
                      || (fetchingErrors.fetchIssueErrorStatusCode !== null)

    return (
      <div>
        {showLoader && <FullPageLoader />}
        {showError && <FullPageError />}
      </div>
    )
  }

  const {
    title, created_at,
    // body of the issue
    body, id,
    // user who created the issue
    user,
    // comments for this issue
    comments,
  } = issue

  // create comment like object form the issue to add it to the array of comments
  let issueAsComment = {
    body,
    created_at,
    user,
    id
  }

  if (comments.length === 0)
    commentsPlusIssue = [ issueAsComment ]
  else
    commentsPlusIssue = [ issueAsComment, ...comments ]

  const { login, html_url } = user
  const showLoader = fetchingStatus.commentsStatus === true
  const showError = fetchingErrors.fetchCommentsErrorStatusCode !== null
  return (
    <Center>
      <ResponsiveWrapper textAlign="center">
        <Segment>
          <IssuePageHeader
            title={title}
            html_url={html_url}
            login={login}
            created_at={created_at}
          />
        </Segment>
      </ResponsiveWrapper>

      <ResponsiveWrapper textAlign="left">
        {commentsPlusIssue.length !== 0
          ? <CommentList comments={commentsPlusIssue} />
          : <Grid.Row columns={1}>`There is no comments here.`</Grid.Row>
        }
      </ResponsiveWrapper>

      <ResponsiveWrapper textAlign="center">
        {showLoader && <SmallLoader />}
      </ResponsiveWrapper>

      <ResponsiveWrapper textAlign="center">
        {showError && <SmallError status={fetchingErrors.fetchCommentsErrorStatusCode} />}
      </ResponsiveWrapper>
    </Center>
  )
}

IssuePage.propTypes = {
  issue: t.shape({
    id: t.number.isRequired,
    body: t.string.isRequired,
    user: t.object.isRequired,
    title: t.string.isRequired,
    created_at: t.string.isRequired,
    comments: t.arrayOf(t.object).isRequired
  }),
  fetchingStatus: t.shape({
    repoStatus: t.bool.isRequired,
    issueStatus: t.bool.isRequired,
  }).isRequired,
  fetchingErrors: t.shape({
    fetchRepoErrorStatusCode: t.number,
    fetchIssuesErrorStatusCode: t.number,
    fetchCommentsErrorStatusCode: t.number,
  }).isRequired,
}


export default IssuePage
