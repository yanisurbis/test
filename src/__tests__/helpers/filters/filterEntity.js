import { filterNormalizedEntities } from 'code/helpers/dataCleaning/filters'

test('filter normilize entity always returns object of arrays', () => {
  // if after normalization we have empty object
  expect(filterNormalizedEntities({})).toEqual({
    issues: [],
    users: [],
    repos: [],
    comments: [],
  })
})
