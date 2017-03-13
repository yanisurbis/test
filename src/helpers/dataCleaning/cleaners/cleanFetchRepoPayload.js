import normalizeRepo from '../normalizers/normalizeRepo'
import { filterNormalizedEntities } from '../filters'

export default function cleanFetchRepoPayload(payload) {
  var response = payload.response
  var normalizedResponce = normalizeRepo(response)
  var filteredNormResponce = filterNormalizedEntities(normalizedResponce.entities)
  return filteredNormResponce
}
