import React, { PropTypes as t } from 'react'
import { Header } from 'semantic-ui-react'
import timeago from 'timeago.js'

export default function IssuePageHeader({title, html_url, login, created_at}) {
  return (
    <Header as='h2'>
      {title}
      <Header.Subheader>
        Created by <a href={html_url} target="_blank">{login}</a> - {new timeago().format(created_at)}
      </Header.Subheader>
    </Header>
  )
}

IssuePageHeader.propTypes = {
  title: t.string.isRequired,
  html_url: t.string.isRequired,
  login: t.string.isRequired,
  created_at: t.string.isRequired,
}
