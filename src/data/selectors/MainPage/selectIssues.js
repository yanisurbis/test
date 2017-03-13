export default function selectIssues(session, username, repositoryName) {
  const { User, Repo } = session

  const user = User.filter(user => user.login === username)

  if (user.exists()) {
    const repo = user.first()
                  .repos.filter(repo => repo.name === repositoryName)

    if (repo.exists()) {

      return repo.first()
             .issues.orderBy(['created_at'], ['desc'])
             .toRefArray().map(issue => ({
                ...issue,
                fullRepoName: Repo.withId(issue.repository).ref.full_name,
                user: User.withId(issue.user).ref
              }))
    }
    // can't find repo with repositoryName
    return []
  }
  // can't find user
  return []
}
