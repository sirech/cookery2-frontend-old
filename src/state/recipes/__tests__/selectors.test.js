import fixtures from '../../__fixtures__'

import recipesSelector from '../selectors'

describe('recipes list selectors', () => {
  describe('recipesSelector', () => {
    it('selects the recipes', () => {
      expect(recipesSelector(fixtures())).toMatchSnapshot()
    })
  })
})
