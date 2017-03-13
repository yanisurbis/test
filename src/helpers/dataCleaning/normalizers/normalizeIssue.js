import { normalize } from 'normalizr'
import { issueSchema } from './schemas'

// GET /repos/:owner/:repo/issues/:number
// issue is object

export default function normalizeIssue(issue) {
  return normalize(issue, issueSchema)
}
