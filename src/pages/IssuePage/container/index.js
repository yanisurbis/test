import { compose } from 'recompose'

import connect from './HOCs/connect'
import didMount from './HOCs/didMount'

import IssuePage from 'code/pages/IssuePage/views/IssuePage'

export default compose(connect, didMount)(IssuePage)
