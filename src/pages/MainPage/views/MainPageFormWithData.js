import React, { PropTypes as t } from 'react'
import { Field } from 'redux-form'
import { Form } from 'semantic-ui-react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// components to render by redux-form
import { UserNameField,
         IssuesPerPageField,
         SelectRepoField,
       } from 'code/pages/MainPage/views/FormFields'

function MainPageForm(props) {
  console.log("PROPS")
  console.log(props)
  const {
    // props from redux form
    valid,
    // action creators
    fetchIssues, handleChangeForUsernameInput, handleChangeForIssuesPerPageInput,
    // params for action creators
    username, issuesPerPage,
    // data: fetched issues, repos names, users
    reposNames, newReposNames,
    // errors & indicators
    fetchingErrors: { fetchIssuesErrorStatusCode, fetchReposErrorStatusCode },
    fetchingStatus: { fetchingRepos },
  } = props

  return (
    <Form>
      <Field
        name="username" type="text" label="User Name"
        component={UserNameField}
        onChange={handleChangeForUsernameInput}
        // because we fetch repos by changing username
        // so 404 means user is not found
        fetchReposErrorStatusCode={fetchReposErrorStatusCode}
      />
      <Field
        name="issuesPerPage" type="number" label="Issues Per Page"
        onChange={handleChangeForIssuesPerPageInput}
        component={IssuesPerPageField}
      />
      <Field
        name="repositoryName" type="text"
        label="Repository"
        component={SelectRepoField}
        // array of string names
        reposNames={newReposNames}
        fetchIssuesErrorStatusCode={fetchIssuesErrorStatusCode}
        fetchingReposStatus={fetchingRepos}

        // to fetch repo when element from list is choosed
        fetchIssues={fetchIssues}
        // other params needed to use fetchRepos, I can use curryN, but come on...we are in frontend
        username={username} issuesPerPage={issuesPerPage}

        // not fetch if form isn't valid
        valid={valid}
      />
    </Form>
  )
}

const RepositoriesQuery = gql`query RepositoriesQuery($login: String!) {
  repositoryOwner(login: $login) {
    repositories(first: 100) {
      nodes {
        # for SelectRepo component data requirements
        # array of object with title property
        title: name
      }
    }
  }
}`

const MainPageFormWithData = graphql(RepositoriesQuery, {
  options: ({username}) => ({ variables: { login:username } }),
  skip: ({username}) => !username,
  props(props) {
    return {
      ...props,
      newReposNames: (props.data && props.data.repositoryOwner && props.data.repositoryOwner.repositories.nodes) || []
    }
  }
})(MainPageForm)

export default MainPageFormWithData
