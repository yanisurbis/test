import React from 'react'
import { Dimmer, Icon, List, Header } from 'semantic-ui-react'

export default () => (
  <Dimmer active>
    <Header as='h2' icon inverted>
      <Icon name='help' />
      Error! Try again.
    </Header>
    <List bulleted>
      <List.Item>Check naming</List.Item>
      <List.Item>Check your internet connection</List.Item>
    </List>
  </Dimmer>
)
