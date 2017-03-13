export default function onFetchIssuesFulfilled(session, payload) {
  const { Issue, Comment } = session
  Issue.all().delete()
  Comment.all().delete()
}
