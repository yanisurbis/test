const validate = values => {
  const errors = {}

  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }

  if (!values.repositoryName) {
    errors.repositoryName = 'Required'
  }

  if (!values.issuesPerPage) {
    errors.issuesPerPage = 'Required'
  } else if (parseInt(values.issuesPerPage, 10) > 20) {
    errors.age = 'Must be 20 issues or less'
  }

  return errors
}

export default validate
