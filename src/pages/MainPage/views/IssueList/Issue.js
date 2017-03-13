import React, { PropTypes as t } from 'react'
import { Link } from 'react-router-dom'
import { Item } from 'semantic-ui-react'
import timeago from 'timeago.js'

// import './Issue.css'

function Issue({ issue }) {
  const { number, title, created_at, fullRepoName, user } = issue
  const { avatar_url, html_url, login } = user

  return (
    <Item>
      <Item.Image size='mini' src={avatar_url} />

      <Item.Content>
        <Item.Header>
          <Link
            to={{
              pathname: `${fullRepoName}/issues/${number}`,
              // we pass index of issue through props to retrieve data from redux store later
              // we use here react router v5 feature here
              // state: { index },
            }}
          >
            {title}.
          </Link>
        </Item.Header>
        <Item.Meta>
          #{number} - {new timeago().format(created_at)} by <a href={html_url} target="_blank">{login}</a>
        </Item.Meta>
      </Item.Content>
    </Item>
  );
}

Issue.propTypes = {
  issue: t.shape({
    title: t.string.isRequired,
    number: t.number.isRequired,
    created_at: t.string.isRequired,
    user: t.shape({
      avatar_url: t.string.isRequired,
      login: t.string.isRequired,
      html_url: t.string.isRequired,
    })
  })
}

export default Issue
