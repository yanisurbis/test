import React from 'react'
import { Dimmer, Icon, Header } from 'semantic-ui-react'

export default () => (
  <Dimmer active>
    <Header size='huge' icon inverted>
      <Icon name='warning circle' circular/>
      Not Found.
    </Header>
  </Dimmer>
)
