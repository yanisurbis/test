import R from 'ramda'

import filterUser from './filterUser'
import filterRepo from './filterRepo'
import filterIssue from './filterIssue'
import filterComment from './filterComment'

export default function(entities) {
  // console.log("ENTITIES")
  // console.log(entities)
  var users = [],
      repos = [],
      issues = [],
      comments = [];

  if ('users' in entities)
    users = R.values(entities.users).map(user => filterUser(user))

  if ('repos' in entities)
    repos = R.values(entities.repos).map(repo => filterRepo(repo))

  if ('issues' in entities)
    issues = R.values(entities.issues).map(issue => filterIssue(issue))

  if ('comments' in entities)
    comments = R.values(entities.comments).map(comment => filterComment(comment))

  return {
    users,
    repos,
    issues,
    comments,
  }
}
