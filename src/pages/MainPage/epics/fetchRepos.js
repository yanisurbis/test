import Rx from 'rxjs'

import * as constants from '../constants'
import { cleanFetchReposPayload } from 'code/helpers/dataCleaning'
import { urlToFetchRepos } from 'code/helpers/url'

export default action$ =>
  action$
  .ofType(constants.FETCH_REPOS)
  .debounceTime(1000)
  .map(action => action.payload)
  .map(({ username }) => urlToFetchRepos(username))
  .switchMap(
    urlToFetchFrom =>
      Rx.Observable.ajax(urlToFetchFrom)
        .map(payload => cleanFetchReposPayload(payload))
        .map(cleanedResponse => ({
            type: constants.FETCH_REPOS_FULFILLED,
            payload: cleanedResponse,
        }))
        .takeUntil(action$.ofType(constants.FETCH_REPOS))
        .catch(
          payload => Rx.Observable.of({
            type: constants.FETCH_REPOS_REJECTED,
            payload: payload,
          })
        )
  )
