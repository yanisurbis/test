import { createSelector } from 'reselect'

const indexOfPageToFetchSelector = createSelector(
  state => state.mainPage.fetchParams.indexOfPageToFetch,
  status => status,
)

export default indexOfPageToFetchSelector
