import React, { PropTypes as t } from 'react'
import { Form, Input } from 'semantic-ui-react'
import ErrorLabel from './ErrorLabel'

const UserNameField = ({
  // errors
  fetchReposErrorStatusCode,
  // props from redux form
  input, label, type,
  input: { value },
  meta: { touched, error },
}) => {

  const showError = Boolean((touched && error) || fetchReposErrorStatusCode !== null)

  return (
    <Form.Field error={showError}>
      <label htmlFor="username" className="form">
        {label}
      </label>
      <Input
        id="username"
        type={type}
        {...input}
        value={value.toLowerCase()}
      />
      { showError && <ErrorLabel
          formValidationErrorMessage={error}
          fetchErrorStatusCode={fetchReposErrorStatusCode}
        />
      }
    </Form.Field>
  )
}

UserNameField.propTypes = {
  fetchReposErrorStatusCode: t.object,
  meta: t.shape({
    touched: t.bool.isRequired,
    error: t.string,
  }).isRequired,
  input: t.object.isRequired,
  label: t.string.isRequired,
  type: t.string.isRequired,
}

export default UserNameField
