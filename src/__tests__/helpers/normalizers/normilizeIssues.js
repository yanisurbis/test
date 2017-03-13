import normalizeIssues from 'code/helpers/dataCleaning/normalizers/normalizeIssues'
import transformIssue from 'code/helpers/dataCleaning/transformers/transformIssue'

import { issues } from '../../apiExamples.helpers'
var emptyIssues = []

test('normalize issues use proper scheme for normalization', () => {
  var transformedIssuesNormal = issues.map(issue => transformIssue(issue))
  const normalizedIssues = normalizeIssues(transformedIssuesNormal)
  expect(normalizedIssues.entities).toHaveProperty('issues')
  expect(normalizedIssues.entities).toHaveProperty('users')
  expect(normalizedIssues.entities).toHaveProperty('repos')
})

// when a user don't have any issues at all
test('normalize issues return empty object when there is nothing to normalize', () => {
  const normalizedIssues = normalizeIssues(emptyIssues)
  expect(normalizedIssues.entities).toEqual({})
})
