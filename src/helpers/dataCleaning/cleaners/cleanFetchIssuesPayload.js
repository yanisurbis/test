import normalizeIssues from '../normalizers/normalizeIssues'
import transformIssue from '../transformers/transformIssue'

import { filterNormalizedEntities } from '../filters'

export default function cleanFetchIssuePayload(payload) {
  // debugger;
  var issues = payload.response
  // add new field
  var transformedIssues = issues.map(issue => transformIssue(issue))
  // normalize
  var normalizedIssues = normalizeIssues(transformedIssues)
  var filteredNormIssue = filterNormalizedEntities(normalizedIssues.entities)
  return filteredNormIssue
}
