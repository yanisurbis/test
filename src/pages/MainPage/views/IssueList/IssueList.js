import React, { PropTypes as t } from 'react'

import { Item } from 'semantic-ui-react'

import Issue from './Issue'

function IssueList({ issues }) {

  return (
    <Item.Group divided>
      {issues.map(issue => <Issue issue={issue} key={issue.id.toString()} />)}
    </Item.Group>
  );
}

IssueList.propTypes = {
  issues: t.arrayOf(t.shape({
    id: t.number.isRequired,
  })).isRequired
}

export default IssueList
