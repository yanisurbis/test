import { formValueSelector } from 'redux-form';

const selector = formValueSelector('form')

function usernameSelector(state) {
  return selector(state, 'username')
}

function repositoryNameSelector(state) {
  return selector(state, 'repositoryName')
}

function issuesPerPageSelector(state) {
  return selector(state, 'issuesPerPage')
}

export {
  usernameSelector,
  repositoryNameSelector,
  issuesPerPageSelector,
}
