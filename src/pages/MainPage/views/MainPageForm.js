import React, { PropTypes as t } from 'react'
import { Field } from 'redux-form'
import { Form } from 'semantic-ui-react'

// components to render by redux-form
import { UserNameField,
         IssuesPerPageField,
         SelectRepoField,
       } from 'code/pages/MainPage/views/FormFields'

function MainPageForm(props) {
  const {
    // props from redux form
    valid,
    // action creators
    fetchIssues, handleChangeForUsernameInput, handleChangeForIssuesPerPageInput,
    // params for action creators
    username, issuesPerPage,
    // data: fetched issues, repos names, users
    reposNames,
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
        reposNames={reposNames}
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

MainPageForm.propTypes = {
  // can we create action or not, correctnes of form from redux-form
  valid: t.bool.isRequired,
  // action creators
  fetchIssues: t.func.isRequired,
  handleChangeForUsernameInput: t.func.isRequired,
  handleChangeForIssuesPerPageInput: t.func.isRequired,
  // params for action creators
  username: t.string,
  // BUG: Failed prop type: Invalid prop `issuesPerPage` of type `number` supplied to `MainPageForm`, expected `string`.
  issuesPerPage: t.string,
  // repos' names to show in dropdown
  reposNames: t.arrayOf(t.string).isRequired,
  // errors & indicators
  fetchingErrors: t.shape({
    fetchReposErrorStatusCode: t.number,
    fetchIssuesErrorStatusCode: t.number,
  }).isRequired,
  fetchingStatus: t.shape({
    fetchingRepos: t.bool.isRequired,
  }).isRequired,
}

export default MainPageForm
