import React, { PropTypes as t } from 'react'
import { Form, Search } from 'semantic-ui-react'

import ErrorLabel from './ErrorLabel'

class SelectRepoField extends React.Component {

  handleResultSelect = (event, value) => {
    let {
      // from redux form
      input: { onChange },
      valid,
      // action creator
      fetchIssues,
      // action creator's params
      username, issuesPerPage,
    } = this.props
    // value contains selected item from the repo list
    let choosedRepositoryName = value.title

    // http://redux-form.com/6.0.0-alpha.4/docs/api/Field.md/
    // if we have valid form
    if (valid) {
      // sent new value to redux form
      onChange(choosedRepositoryName)
      //
      fetchIssues(username, choosedRepositoryName, issuesPerPage)
    }
  }

  render() {
    let {
      reposNames = [],
      input, label,
      meta: { touched, error },
      // input obj contains redux-form's event handlers & input value
      input: {onChange, value},
      fetchingReposStatus, fetchIssuesErrorStatusCode,
    } = this.props

    // show label if our form was filled incorrectly
    const showError = Boolean( (touched && error) || fetchIssuesErrorStatusCode !== null )

    const filteredReposNames = reposNames
                  .filter(name => name.toLowerCase().indexOf(value.toLowerCase()) >= 0)
                  .map(name => ({title: name}))

    return (
      <Form.Field error={showError}>
        <label>
          {label}
        </label>
        <Search
          {...input}
          value={value.toLowerCase()}
          loading={fetchingReposStatus}
          onSearchChange={onChange}
          results={filteredReposNames}
          onResultSelect={this.handleResultSelect}
        />
        { showError && <ErrorLabel
            // show label if our form was filled incorrectly
            // or we recieved error during the fetching process
            formValidationErrorMessage={error}
            fetchErrorStatusCode={fetchIssuesErrorStatusCode}
          />
        }
      </Form.Field>
    )
  }
}

SelectRepoField.t = {
  reposNames: t.arrayOf(t.string).isRequierd,

  fetchingReposStatus: t.bool.isRequierd,
  fetchIssuesErrorStatusCode: t.object,

  fetchIssues: t.func.isRequierd,
  username: t.string.isRequierd,
  issuesPerPage: t.string.isRequierd,

  meta: t.shape({
    touched: t.bool.isRequired,
    error: t.string,
  }).isRequired,
  input: t.shape({
    onChange: t.func.isRequired,
    value: t.string.isRequired,
  }).isRequired,
  valid: t.bool.isRequired,
  label: t.string.isRequired,
}

export default SelectRepoField
