import transformIssue from 'code/helpers/dataCleaning/transformers/transformIssue'
import { issue } from '../../apiExamples.helpers'

test('we can obtain full_name of repository by providing only issue object', () => {
  expect(transformIssue(issue).repository).toEqual({
    full_name: 'octocat/Hello-World',
    id: 1,
  })
})
