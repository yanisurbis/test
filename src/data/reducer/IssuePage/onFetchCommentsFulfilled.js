import createIfNotExists from '../createIfNotExists'

export default function onFetchCommentsFulfilled(session, entities) {
  const { User, Issue, Comment } = session
  const { users, comments, issues } = entities

  if (comments.length === 0) return

  const issue = issues[0]
  const issueId = Issue.filter(i => i.number === issue.number).first().id

  comments.forEach(comment => {
    const createdComment = createIfNotExists(Comment, comment)
    // const createdComment = Comment.create(comment)
    createdComment.issue = issueId
  })

  users.map(user => createIfNotExists(User, user))
}
