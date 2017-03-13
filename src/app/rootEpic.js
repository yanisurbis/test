import { combineEpics } from 'redux-observable'

import { mainPageEpics } from 'code/pages/MainPage'
import { issuePageEpics } from 'code/pages/IssuePage'


export default combineEpics(
  mainPageEpics.fetchIssues,
  mainPageEpics.fetchRepos,

  issuePageEpics.fetchRepo,
  issuePageEpics.fetchIssueWithBuffer,
  issuePageEpics.fetchComments,
  issuePageEpics.fetchCommentsWithBuffer,
);
