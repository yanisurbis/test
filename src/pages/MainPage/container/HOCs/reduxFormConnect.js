import { reduxForm } from 'redux-form'

import validate from 'code/pages/MainPage/validation/validate'

export default reduxForm({
  form: 'form',
  destroyOnUnmount: false,
  validate,
  initialValues: {
    issuesPerPage: '6',
  }
})
