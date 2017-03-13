import * as constants from '../constants'

const initialState = {
  indexOfPageToFetch: 1,
}

function fetchParamsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_ISSUES_FULFILLED:
      return {
        ...state,
        indexOfPageToFetch: state.indexOfPageToFetch + 1,
      }
    case constants.CLEAR_DATA:
      return initialState
    case constants.CLEAR_ISSUES_COMMENTS:
      return initialState
    default:
      return state
  }
}

export default fetchParamsReducer
export {
  initialState
}
