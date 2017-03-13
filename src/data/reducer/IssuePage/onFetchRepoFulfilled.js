import createIfNotExists from '../createIfNotExists'

export default function onFetchRepoFulfilled(session, entities) {
  const { User, Repo } = session
  const { users, repos } = entities

  if (repos.length === 0) return
  
  var createdUser, createdRepo,
      user, repo

  user = users[0]
  createdUser = createIfNotExists(User, user)

  repo = repos[0]
  createdRepo = createIfNotExists(Repo, repo)
  createdRepo.owner = createdUser
}
