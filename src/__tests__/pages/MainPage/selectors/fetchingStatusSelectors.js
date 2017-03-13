import { fetchingReposStatus } from 'code/pages/MainPage/selectors/fetchingStatusSelectors'
import { FETCH_REPOS, FETCH_REPOS_FULFILLED, FETCH_ISSUES } from 'code/pages/MainPage/constants'

import rootReducer from 'code/app/rootReducer'

test('SELECTOR(status of fetching repos) unit test', () => {
  const initialState = rootReducer(undefined, {})

  expect(
    fetchingReposStatus(initialState)
  ).toBe(false)

  // selector reacts to the actions

  const actionToTriggerFetching = {
    type: FETCH_REPOS,
    payload: {
      username: 'avajs',
    }
  }

  const state1 = rootReducer(initialState, actionToTriggerFetching)

  expect(
    fetchingReposStatus(state1)
  ).toBe(true)

  const actionToCloseFetching = {
    type: FETCH_REPOS_FULFILLED,
    payload: {
      users: [],
      repos: [],
      comments: [],
      issues: [],
    }
  }

  const state2 = rootReducer(state1, actionToCloseFetching)

  expect(
    fetchingReposStatus(state2)
  ).toBe(false)

  // memoization works fine
  expect(
    fetchingReposStatus.recomputations()
  ).toBe(3)

  const actionWhichWontAffectThisPartOfState = {
    type: FETCH_ISSUES,
    payload: {
      username: 'avajs',
      repositoryName: 'ava',
      issuesPerPage: '3',
    }
  }

  const state3 = rootReducer(state2, actionWhichWontAffectThisPartOfState)
  fetchingReposStatus(state3)

  expect(
    fetchingReposStatus.recomputations()
  ).toBe(3)
})
