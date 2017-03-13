import reducer, { initialState }
  from 'code/pages/MainPage/reducers/fetchParamsReducer'

import { FETCH_ISSUES_FULFILLED, CLEAR_DATA, CLEAR_ISSUES_COMMENTS }
  from 'code/pages/MainPage/constants'

test('reducer returns initial state', () => {
  expect(
    reducer(undefined, {})
  ).toEqual(initialState)
})

test('reducer should handle FETCH_ISSUES_FULFILLED action', () => {
  const action = {
    type: FETCH_ISSUES_FULFILLED
  }

  const nextState = {
    ...initialState,
    indexOfPageToFetch: initialState.indexOfPageToFetch + 1
  }

  expect(
    reducer(initialState, action)
  ).toEqual(nextState)
})

test('reducer should handle CLEAR_DATA', () => {
  const action = {
    type: CLEAR_DATA
  }

  // change state
  const state1 = reducer(initialState, { type: FETCH_ISSUES_FULFILLED })

  expect(
    reducer(state1, action)
  ).toEqual(initialState)
})

test('reducer should handle CLEAR_ISSUES', () => {
  const action = {
    type: CLEAR_ISSUES_COMMENTS
  }

  // change state
  const state1 = reducer(initialState, { type: FETCH_ISSUES_FULFILLED })

  expect(
    reducer(state1, action)
  ).toEqual(initialState)
})
