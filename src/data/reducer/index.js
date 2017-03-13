import orm from '../orm'

import { mainPageConstants } from 'code/pages/MainPage'
import { issuePageConstants } from 'code/pages/IssuePage'

import onFetchReposFulfilled from './MainPage/onFetchReposFulfilled'
import onFetchIssuesFulfilled from './MainPage/onFetchIssuesFulfilled'
import onClearData from './MainPage/onClearData'
import onClearIssuesComments from './MainPage/onClearIssuesComments'

import onFetchRepoFulfilled from './IssuePage/onFetchRepoFulfilled'
import onFetchIssueFulfilled from './IssuePage/onFetchIssueFulfilled'
import onFetchCommentsFulfilled from './IssuePage/onFetchCommentsFulfilled'

const emptyDBState = orm.getEmptyState();

function ormReducer(dbState = emptyDBState, action) {
    const sess = orm.session(dbState)
    const { type, payload } = action
    // Session-specific Models are available
    // as properties on the Session instance.

    switch (type) {
      case mainPageConstants.FETCH_REPOS_FULFILLED:
        onFetchReposFulfilled(sess, payload)
        break;
      case mainPageConstants.FETCH_ISSUES_FULFILLED:
        onFetchIssuesFulfilled(sess, payload)
        break;
      case issuePageConstants.FETCH_ISSUE_FULFILLED:
        onFetchIssueFulfilled(sess, payload)
        break;
      case issuePageConstants.FETCH_COMMENTS_FULFILLED:
        onFetchCommentsFulfilled(sess, payload)
        break;
      case issuePageConstants.FETCH_REPO_FULFILLED:
        onFetchRepoFulfilled(sess, payload)
        break;
      case mainPageConstants.CLEAR_DATA:
        onClearData(sess, payload)
        break;
      case mainPageConstants.CLEAR_ISSUES_COMMENTS:
        onClearIssuesComments(sess, payload)
        break;
      default:
    }

    // the state property of Session always points to the current database.
    // Updates don't mutate the original state, so this reference is not
    // equal to `dbState` that was an argument to this reducer.
    return sess.state;
}

export default ormReducer
