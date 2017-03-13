import React, { PropTypes as t } from 'react'
import { Message } from 'semantic-ui-react'
import errorMessageBasedOnErrorStatusCode from 'code/helpers/errorMessageBasedOnErrorStatusCode'

export default function SmallError(status) {
  return (
    <Message negative>
      <Message.Header>Something has happened</Message.Header>
      <p>{errorMessageBasedOnErrorStatusCode(status)}</p>
    </Message>
  )
}

SmallError.propTypes = {
  status: t.number.isRequired,
}
