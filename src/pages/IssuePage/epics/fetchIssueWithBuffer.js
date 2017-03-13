import Rx from 'rxjs'

import * as constants from '../constants'
import { cleanFetchIssuePayload } from 'code/helpers/dataCleaning'
import { urlToFetchIssue } from 'code/helpers/url'

const errorInSeq = {
  message: "Error in epic sequence",
  status: -1,
}

export default (action$, store) => {
  const repoWasRejected = action$
    .ofType(constants.FETCH_REPO_REJECTED)

  return action$
    .ofType(constants.FETCH_ISSUE_WITH_BUFFER)
    .map(action => action.payload)
    .map(({ username, repositoryName, issueNumber }) => urlToFetchIssue(username, repositoryName, issueNumber))
    .switchMap(
      urlToFetchFrom =>
        Rx.Observable.ajax(urlToFetchFrom)
          .map(payload => cleanFetchIssuePayload(payload))
          .combineLatest(action$.ofType(constants.FETCH_REPO_FULFILLED).take(1), payload => payload)
          .map(cleanedResponse => ({
              type: constants.FETCH_ISSUE_FULFILLED,
              payload: cleanedResponse,
          }))
          // .retryWhen(
          //   err => window.navigator.onLine
          //     ? Rx.Observable.timer(1000)
          //     : Rx.Observable.fromEvent(window, 'online')
          // )
          .takeUntil(repoWasRejected)
          .defaultIfEmpty({
            type: constants.FETCH_ISSUE_REJECTED,
            payload: errorInSeq,
          })
          .catch(
            payload => Rx.Observable.of({
              type: constants.FETCH_ISSUE_REJECTED,
              payload: payload,
            })
          )
    )
}
