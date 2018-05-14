import state from '../../__fixtures__'
import {
  formSelector,
  recipeSelector,
  fieldSelectorBuilder,
} from '../selectors'

describe('selectors', () => {
  describe('formSelector', () => {
    it('selects the form', () => {
      expect(formSelector(state())).toMatchSnapshot()
    })
  })

  describe('recipeSelector', () => {
    it('selects the form', () => {
      expect(recipeSelector(state())).toMatchSnapshot()
    })
  })

  describe('fieldSelectorBuilder', () => {
    it('selects a concrete field', () => {
      expect(fieldSelectorBuilder('name')(state())).toMatchSnapshot()
    })
  })
})
