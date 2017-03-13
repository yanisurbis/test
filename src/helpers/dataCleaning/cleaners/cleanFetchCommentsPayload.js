import normalizeComments from '../normalizers/normalizeComments'
import transformComment from '../transformers/transformComment'

import { filterNormalizedEntities } from '../filters'

export default function cleanFetchIssuePayload(payload) {
  var comments = payload.response
  // add new field
  var transformedComments = comments.map(comment => transformComment(comment))
  // normalize
  var normalizedComments = normalizeComments(transformedComments)
  var filteredNormComments = filterNormalizedEntities(normalizedComments.entities)
  return filteredNormComments
}
