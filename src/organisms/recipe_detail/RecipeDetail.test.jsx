import React from 'react'

import { fullRender } from 'test'
import state from 'state/__fixtures__'
import RecipeDetail from './RecipeDetail'

// Mock thunk that triggers API request
import { actions } from 'state/recipe'
jest.mock('state/recipe/actions', () => ({
  fetchRecipe: jest.fn(dispatch => jest.fn()),
}))

describe('components', () => {
  describe('RecipeDetail', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('renders correctly', () => {
      const { component } = fullRender(<RecipeDetail />, state())
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('fetches the recipes when mounted', () => {
      const match = { params: { id: '13' } }

      fullRender(<RecipeDetail match={match} />, state())
      expect(actions.fetchRecipe.mock.calls.length).toBe(1)
    })
  })
})
