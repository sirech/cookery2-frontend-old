import React from 'react'
import renderer from 'react-test-renderer'

import RecipeHeader from './RecipeHeader'

describe('components', () => {
  describe('RecipeHeader', () => {
    it('renders correctly', () => {
      const component = renderer.create(<RecipeHeader />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
