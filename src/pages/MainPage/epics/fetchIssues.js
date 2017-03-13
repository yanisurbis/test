import Rx from 'rxjs'

import * as constants from '../constants'
import { cleanFetchIssuesPayload } from 'code/helpers/dataCleaning'
import { urlToFetchIssues } from 'code/helpers/url'
import indexOfPageToFetchSelector from '../selectors/indexOfPageToFetchSelector'

export default (action$, store) =>
  action$
  .ofType(constants.FETCH_ISSUES)
  .debounceTime(1000)
  .map(action => action.payload)
  .map(
    ({ username, repositoryName, issuesPerPage }) =>
      urlToFetchIssues(
        username,
        repositoryName,
        issuesPerPage,
        indexOfPageToFetchSelector(store.getState())
      )
  )
  .switchMap(
    urlToFetchFrom =>
      Rx.Observable.ajax(urlToFetchFrom)
        .map(payload => cleanFetchIssuesPayload(payload))
        .map(cleanedResponse => ({
            type: constants.FETCH_ISSUES_FULFILLED,
            payload: cleanedResponse,
        }))
        .takeUntil(action$.ofType(constants.FETCH_ISSUES))
        .catch(payload => Rx.Observable.of({
          type: constants.FETCH_ISSUES_REJECTED,
          payload: payload,
        }))
  )
