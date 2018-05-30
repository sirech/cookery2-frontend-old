import state from 'state/__fixtures__'
import { validSelector, touchedSelector } from './selectors'

describe('selectors', () => {
  describe('validSelector', () => {
    it('selects the valid state for a field', () => {
      expect(validSelector(state(), { name: 'name' })).toEqual(true)
    })
  })

  describe('touchedSelector', () => {
    it('selects the valid state for a field', () => {
      expect(touchedSelector(state(), { name: 'name' })).toEqual(false)
    })
  })
})
