import { recipes as recipesState } from '../../__fixtures__'

import { REQUEST_RECIPES, RECEIVE_RECIPES } from '../constants'
import recipes from '../reducers'

describe('recipes reducer', () => {
  it('returns the initial state', () => {
    expect(recipes(undefined, {})).toMatchSnapshot()
  })

  it('handles REQUEST_RECIPES', () => {
    const action = {
      type: REQUEST_RECIPES
    }

    expect(recipes(recipesState(), action)).toMatchSnapshot()
  })

  it('handles RECEIVE_RECIPES', () => {
    const action = {
      type: RECEIVE_RECIPES,
      payload: recipesState()
    }

    expect(recipes(undefined, action)).toMatchSnapshot()
  })
})
