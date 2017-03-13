import createIfNotExists from '../createIfNotExists'

export default function onFetchIssueFulfilled(session, entities) {
  const { User, Repo, Issue } = session
  const { users, repos, issues } = entities
  // debugger;
  if (issues.length === 0) return
  // have only one user, one issue, one repo in entities
  const user = users[0]
  const repo = repos[0]
  const issue = issues[0]

  createIfNotExists(User, user)
  // User.create(user)
  // find id of repo which contains this issue
  const repoId = Repo.filter(r => r.full_name === repo.full_name).first().id
  const createdIssue = createIfNotExists(Issue, issue)
  // link issue & repo
  createdIssue.repository = repoId
}
