import React, { PropTypes as t } from 'react'
import { Item } from 'semantic-ui-react'

import Comment from './Comment'

function CommentList({comments}) {
  return (
    <Item.Group divided>
      {comments.map(comment => <Comment comment={comment} key={comment.id.toString()} />)}
    </Item.Group>
  )
}

CommentList.propTypes = {
  comments: t.arrayOf(t.shape({
    id: t.number.isRequired,
  })).isRequired
}

export default CommentList
