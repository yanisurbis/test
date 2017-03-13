export default function onClearData(session, payload) {
  const { User, Issue, Repo, Comment } = session

  User.all().delete()
  Issue.all().delete()
  Repo.all().delete()
  Comment.all().delete()
}
