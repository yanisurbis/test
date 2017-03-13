// for data consistency we want to make a link
// between fetched issue and one of the previously fetched repositories
// in our ORM

// the only information about the repo
// we can find in "repository_url" prop of the issue

// in every issue that was fetched we have
// "repository_url" property
// "repository_url": "https://api.github.com/repos/octocat/Hello-World"

// we can obtain full_name of repository by trimming "repository_url" prop
// "https://api.github.com/repos/octocat/Hello-World" => "octocat/Hello-World"

// then with this "full_name" we can find the id of repo in our ORM during
// reducing process and connect fetched issue with repo

// for normalization purposes
// add "repository" prop to our object and place "full_name" prop there
// add "id" for repository (also for normalization purposes)

function transformIssue(issue) {
  return {
    ...issue,
    repository: {
      full_name: getFullNameFromRepositoryUrl(issue.repository_url),
      // id is used only for normalization purposes, don't worry
      id: 1,
    }
  }
}

function getFullNameFromRepositoryUrl(repoUrl) {
  // "https://api.github.com/repos/octocat/Hello-World"
  // ["https://api.github.com/", "octocat/Hello-World"]
  return repoUrl.split('repos/')[1]
}

export default transformIssue
