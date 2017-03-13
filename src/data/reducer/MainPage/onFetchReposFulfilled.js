import createIfNotExists from '../createIfNotExists'

export default function onFetchReposFulfilled(session, entities) {
  // we have one USER and REPOS of this user in entities after normalization
  // simply add evrth to orm
  const { User, Repo } = session
  const { users, repos } = entities

  if (repos.length === 0) return

  const user = users[0]
  const createdUser = createIfNotExists(User, user)
  
  repos.forEach(repo => {
    const createdRepo = createIfNotExists(Repo, repo)
    // const createdRepo = Repo.create(repo)
    createdRepo.owner = createdUser
  })
}
