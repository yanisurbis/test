import React from 'react'
import { Grid } from 'semantic-ui-react'

export default function Center({children, textAlign}) {
  return (
    <Grid.Row textAlign={textAlign}>
      <Grid.Column mobile={14} tablet={10} computer={8}>
        {children}
      </Grid.Column>
    </Grid.Row>
  )
}
