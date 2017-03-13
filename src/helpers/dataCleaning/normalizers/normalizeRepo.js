// https://developer.github.com/v3/repos/

// GET /repos/:owner/:repo
// recieve object

import { normalize } from 'normalizr'
import { repoSchema } from './schemas'

export default function normalizeRepo(repo) {
  return normalize(repo, repoSchema)
}
