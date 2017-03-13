// component responsible for showing or hiding "Show More" button
// also for rendering loader when needed
import React, { PropTypes as t } from 'react'
import { Button } from 'semantic-ui-react'

const ActionButton = ({ onClick, disabled, text }) => {
  return (
    <Button primary onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  )
}

ActionButton.propTypes = {
  disabled: t.bool.isRequired,
  onClick: t.func.isRequired
}

export default ActionButton
