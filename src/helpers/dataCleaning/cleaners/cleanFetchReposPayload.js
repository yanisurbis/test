import normalizeRepos from '../normalizers/normalizeRepos'

import { filterNormalizedEntities } from '../filters'

export default function cleanFetchReposPayload(payload) {
  // debugger;
  var repos = payload.response
  // normalize
  var normalizedRepos = normalizeRepos(repos)
  var filteredNormRepos = filterNormalizedEntities(normalizedRepos.entities)
  return filteredNormRepos
}
