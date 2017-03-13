import createIfNotExists from '../createIfNotExists'

export default function onFetchIssuesFulfilled(session, entities) {
  // we have ISSUES for choosed repo and USERS who created these ISSUES
  // add
  const { User, Issue, Repo } = session
  const { users, issues, repos } = entities

  if (issues.length === 0) return

  users.map(user => createIfNotExists(User, user))
  // users.map(user => User.create(user))

  // the repo to connect our issues with
  const repo = repos[0]
  const repoId = Repo.filter(r => r.full_name === repo.full_name).first().id

  issues.forEach(issue => {
    const createdIssue = createIfNotExists(Issue, issue)
    // const createdIssue = Issue.create(issue)
    createdIssue.repository = repoId
  })
}
