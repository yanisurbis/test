export default function onFetchIssuesFulfilled(session, payload) {
  const { Issue } = session
  Issue.all().delete()
}
