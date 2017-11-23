import React from 'react'

import { fullRender } from 'test'
import state from 'state/__fixtures__'
import RecipesList from './RecipesList'

// Mock thunk that triggers API request
import { actions } from 'state/recipes'
jest.mock('state/recipes/actions', () => ({
  fetchRecipes: jest.fn(dispatch => jest.fn())
}))

describe('components', () => {
  describe('RecipesList', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('renders correctly', () => {
      const { component } = fullRender(<RecipesList />, state())
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('fetches the recipes when mounted', () => {
      fullRender(<RecipesList />, state())
      expect(actions.fetchRecipes.mock.calls.length).toBe(1)
    })
  })
})
