import React, { PropTypes as t } from 'react'
import { Form, Label } from 'semantic-ui-react'

const IssuesPerPageField = ({ input, label, type, meta: { touched, error}}) => (
  <Form.Field error={Boolean(touched && error)}>
    <label>
      {label}
    </label>
    <input
      // passing redux-form's event handlers & value
      {...input}
      type={type}
    />
    {touched && error && <Label basic color='red' pointing>{error}</Label>}
  </Form.Field>
)

IssuesPerPageField.propTypes = {
  label: t.string.isRequired,
  type: t.string.isRequired,
  input: t.object.isRequired,
  meta: t.shape({
    touched: t.bool.isRequired,
    error: t.string,
  }),
}

export default IssuesPerPageField
