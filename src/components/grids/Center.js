import React from 'react'
import { Grid } from 'semantic-ui-react'

export default function Center({children}) {
  return (
    <Grid centered columns={1}>
      {children}
    </Grid>
  )
}
