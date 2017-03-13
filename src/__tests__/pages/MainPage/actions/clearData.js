import { clearData } from 'code/pages/MainPage/actions'
import { CLEAR_DATA } from 'code/pages/MainPage/constants'

test('clearData action creates proper action', () => {
  const expectedAction = {
    type: CLEAR_DATA,
  }

  expect(
    clearData()
  ).toEqual(expectedAction)
})
