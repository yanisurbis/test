import React, { PropTypes as t } from 'react'
import { Item } from 'semantic-ui-react'
import timeago from 'timeago.js'

import ReactMarkdown from 'react-markdown'

import './commentStyles.css'

function Comment({ comment }) {
  let {
    body,
    created_at,
    user,
  } = comment

  let {
    avatar_url,
    login,
    html_url,
  } = user

  return (
    <Item>
      <Item.Image size='mini' src={avatar_url} />
      <Item.Content>
        <Item.Meta>
          <a href={html_url} target="_blank">{login}</a> commented {new timeago().format(created_at)}
        </Item.Meta>
        <Item.Description>
          <div className="notBreakLinks">
            <ReactMarkdown source={body} />
          </div>
        </Item.Description>
      </Item.Content>
    </Item>
  )
}

Comment.propTypes = {
  comment: t.shape({
    body: t.string.isRequired,
    created_at: t.string.isRequired,
    user: t.shape({
      avatar_url: t.string.isRequired,
      login: t.string.isRequired,
      html_url: t.string.isRequired,
    })
  })
}

export default Comment
