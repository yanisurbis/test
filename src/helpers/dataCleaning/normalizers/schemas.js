import { schema } from 'normalizr'

const repoSchema = new schema.Entity('repos', {
  idAttribute: repo => repo.id,
})

const userSchema = new schema.Entity('users', {
  idAttribute: user => user.id,
})

const issueSchema = new schema.Entity('issues', {
  idAttribute: issue => issue.id,
})

// https://developer.github.com/v3/issues/comments/
// choose comment's id as #id because our comments will be inside
// particular issue so we don't need global reference for each comment
const commentSchema = new schema.Entity('comments', {
  idAttribute: comment => comment.id
})

repoSchema.define({
  owner: userSchema,
})

// don't have "repository" prop in issue from the start
// see transformIssue.js for more info
issueSchema.define({
  user: userSchema,
  repository: repoSchema,
})

// don't have "issue" prop in comment from the start
// see transformComment.js for more info
commentSchema.define({
  user: userSchema,
  issue: issueSchema,
})

export { issueSchema,
         repoSchema,
         userSchema,
         commentSchema,
       }
