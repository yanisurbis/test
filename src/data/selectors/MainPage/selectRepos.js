export default function selectRepos(session, username) {
  const { User } = session
  // TODO:? check undefined, howTo
  const user = User.filter({ login: username })
  // console.log(user)
  return user.exists()
    // return array of repos' names
    ? user.first().repos.toRefArray().map(repo => repo.name)
    : []
}
