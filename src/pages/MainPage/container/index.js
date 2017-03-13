import { compose } from 'recompose'

import connect from './HOCs/connect'
import reduxFormConnect from './HOCs/reduxFormConnect'

import MainPage from 'code/pages/MainPage/views/MainPage'

export default compose(connect, reduxFormConnect)(MainPage)
