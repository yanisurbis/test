import Rx from 'rxjs'

import * as constants from '../constants'
import { cleanFetchRepoPayload } from 'code/helpers/dataCleaning'
import { urlToFetchRepo } from 'code/helpers/url'

export default (action$, store) =>
  action$
  .ofType(constants.FETCH_REPO)
  .map(action => action.payload)
  .map(({ username, repositoryName }) => urlToFetchRepo(username, repositoryName))
  .switchMap(
    urlToFetchFrom =>
      Rx.Observable.ajax(urlToFetchFrom)
        .map(payload => cleanFetchRepoPayload(payload))
        .map(cleanedResponse => ({
            type: constants.FETCH_REPO_FULFILLED,
            payload: cleanedResponse,
        }))
        // .retry(3)
        .takeUntil(action$.ofType(constants.FETCH_REPO))
        .catch(
          payload => Rx.Observable.of({
            type: constants.FETCH_REPO_REJECTED,
            payload: payload,
          })
        )
  )
