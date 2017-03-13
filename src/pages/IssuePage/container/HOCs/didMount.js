import { lifecycle } from 'recompose'

export default lifecycle({
  componentDidMount() {
    let { props } = this

    let {
      issue,

      fetchRepo,
      fetchIssueWithBuffer,
      fetchCommentsWithBuffer,
      fetchComments,

      fetchParams,
    } = props

    // we don't have issue in our store
    if (issue === null)
    {
      fetchRepo(fetchParams)
      fetchIssueWithBuffer(fetchParams)
      fetchCommentsWithBuffer(fetchParams)
    }
    else
    {
      fetchComments(fetchParams)
    }
  }
})
