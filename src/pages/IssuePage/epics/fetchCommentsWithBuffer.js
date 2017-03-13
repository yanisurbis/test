import Rx from 'rxjs'

import * as constants from '../constants'
import { cleanFetchCommentsPayload } from 'code/helpers/dataCleaning'
import { urlToFetchComments } from 'code/helpers/url'

const errorInSeq = {
  message: "Error in epic sequence",
  status: -1,
}

export default (action$, store) =>
  action$
  .ofType(constants.FETCH_COMMENTS_WITH_BUFFER)
  .map(action => action.payload)
  .map(({ username, repositoryName, issueNumber }) => urlToFetchComments(username, repositoryName, issueNumber))
  .switchMap(
    urlToFetchFrom =>
      Rx.Observable.ajax(urlToFetchFrom)
        .map(payload => cleanFetchCommentsPayload(payload))
        .combineLatest(action$.ofType(constants.FETCH_ISSUE_FULFILLED).take(1), payload => payload)
        .map(cleanedResponse => ({
            type: constants.FETCH_COMMENTS_FULFILLED,
            payload: cleanedResponse,
        }))
        // .retryWhen(
        //   err => window.navigator.onLine
        //     ? Rx.Observable.timer(1000)
        //     : Rx.Observable.fromEvent(window, 'online')
        // )
        .takeUntil(action$.ofType(constants.FETCH_ISSUE_REJECTED))
        .defaultIfEmpty({
          type: constants.FETCH_COMMENTS_REJECTED,
          payload: errorInSeq,
        })
        .catch(
          payload => Rx.Observable.of({
            type: constants.FETCH_COMMENTS_REJECTED,
            payload: payload,
          })
        )
  )
