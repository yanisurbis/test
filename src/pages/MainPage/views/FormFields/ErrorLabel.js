import React, { PropTypes } from 'react'
import { Label} from 'semantic-ui-react'
import errorMessageBasedOnErrorStatusCode from 'code/helpers/errorMessageBasedOnErrorStatusCode'

export default function ErrorLabel({ formValidationErrorMessage, fetchErrorStatusCode }) {
  return (
    <Label basic color='red' pointing>
      {formValidationErrorMessage || errorMessageBasedOnErrorStatusCode(fetchErrorStatusCode)}
    </Label>
  )
}

ErrorLabel.propTypes = {
  formValidationErrorMessage: PropTypes.string,
  fetchErrorStatusCode: PropTypes.number,
}
