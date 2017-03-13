// for data consistency we want to make a link
// between fetched comment and one of the previously fetched issues
// in our ORM

// the only information in comment about the repo
// we can find in "issue_url prop

function transformComment(comment) {
  return {
    ...comment,
    issue: {
      number: getIssueNumberFromHtmlUrl(comment.issue_url),
      // id is used only for normalization purposes, don't worry
      id: 1,
    }
  }
}

function getIssueNumberFromHtmlUrl(issueUrl) {
  // "https://github.com/octocat/Hello-World/issues/1347#issuecomment-1"
  // ["https://api.github.com/", "octocat/Hello-World"]
  return Number(issueUrl.split('/issues/')[1])
}

export default transformComment
