import { normalize } from 'normalizr'
import { issueSchema } from './schemas'

// GET /repos/:owner/:repo/issues/:number
// issue is object

export default function normalizeIssues(issues) {
  return normalize(issues, [issueSchema])
}
