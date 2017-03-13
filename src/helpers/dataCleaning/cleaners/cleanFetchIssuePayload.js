import normalizeIssue from '../normalizers/normalizeIssue'
import transformIssue from '../transformers/transformIssue'

import { filterNormalizedEntities } from '../filters'

export default function cleanFetchIssuePayload(payload) {
  // debugger;
  var issue = payload.response
  // add new field for normalization purposes
  var transformedIssue = transformIssue(issue)
  // normalize
  var normalizedIssue = normalizeIssue(transformedIssue)
  var filteredNormIssue = filterNormalizedEntities(normalizedIssue.entities)
  return filteredNormIssue
}
