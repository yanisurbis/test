import React, { PropTypes as t } from 'react'
import { Button } from 'semantic-ui-react'

const ButtonClearValues = ({disabled, onClick}) => (
  <Button
    secondary type="button"
    disabled={disabled}
    onClick={onClick}
  >
    Clear Values
  </Button>
)

ButtonClearValues.propTypes = {
  disabled: t.bool.isRequired,
  onClick: t.func.isRequired,
}

export default ButtonClearValues
