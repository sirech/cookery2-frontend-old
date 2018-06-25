import state from 'state/__fixtures__'
import { validSelector } from './selectors'

describe('selectors', () => {
  describe('validSelector', () => {
    it('selects the valid state for a field', () => {
      expect(validSelector(state())).toEqual(true)
    })
  })
})
