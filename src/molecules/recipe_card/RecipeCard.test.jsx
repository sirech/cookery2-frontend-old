import React from 'react'
import { fullRender } from '../../test'
import RecipeCard from './RecipeCard'

describe('components', () => {
  describe('RecipeCard', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<RecipeCard id={1} name='Stuff' difficulty='easy' servings={3} duration={120} />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
