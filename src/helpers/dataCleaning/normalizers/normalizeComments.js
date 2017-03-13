import { normalize } from 'normalizr'
import { commentSchema } from './schemas'

export default function normalizeComments(comments) {
  return normalize(comments, [commentSchema])
}
