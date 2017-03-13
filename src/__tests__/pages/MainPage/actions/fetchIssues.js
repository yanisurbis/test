import { fetchIssues } from 'code/pages/MainPage/actions'
import { FETCH_ISSUES } from 'code/pages/MainPage/constants'

test('fetchIssues action creates proper action', () => {
  const p = {
    username: 'yanisurbis',
    repositoryName: 'vclub',
    issuesPerPage: '7',
  }

  const expectedAction = {
    type: FETCH_ISSUES,
    payload: p,
  }

  expect(
    fetchIssues(p.username, p.repositoryName, p.issuesPerPage)
  ).toEqual(expectedAction)
})
