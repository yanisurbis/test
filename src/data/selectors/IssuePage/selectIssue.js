/*
returns extended issue object
{
  standart issue props,
  user (who created this issue): user object OR null,
  comments: Array of extended comments objects(in every object added user prop)
}
OR null if issue or repo wasn't founded
*/
// select the issue based on router's params
export default function selectIssue(session, {username, repositoryName, issueNumber}) {
  const { Repo, User } = session

  // full_name is unic through repos
  const fullRepoName = username + "/" + repositoryName

  // find repo with such full name
  const repo = Repo.filter(repo => repo.full_name === fullRepoName)

  if (repo.exists()) {

    // find through out issues connected with this repos issue with our number
    const issue = repo.first().issues.filter(issue => issue.number === Number(issueNumber))

    if (issue.exists()) {
      let comments = issue.first().comments
      if (comments.exists())
      {
        const issueRef = issue.first().ref
        const userRef = issue.first().user.ref
        const commentsRef = issue.first().comments.toRefArray()
        // have comments for this issue
        return {
          ...issueRef,
          user: userRef,
          comments: commentsRef.map(comment => ({
            ...comment,
            user: User.withId(comment.user).ref
          }))
        }
      }
      else
      {
        const issueRef = issue.first().ref
        const userRef = issue.first().user.ref
        const commentsRef = []
        // have comments for this issue
        return {
          ...issueRef,
          user: userRef,
          comments: commentsRef
        }
      }
    }
    // issue with this number down't exist
    return null
  }
  // repo doesn't exist
  return null

  // console.log(issue)
}
