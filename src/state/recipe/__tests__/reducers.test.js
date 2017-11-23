import { recipe as recipeState } from 'state/__fixtures__'

import { REQUEST_RECIPE, RECEIVE_RECIPE } from '../constants'
import recipe from '../reducers'

describe('recipe reducer', () => {
  it('returns the initial state', () => {
    expect(recipe(undefined, {})).toMatchSnapshot()
  })

  it('handles REQUEST_RECIPE', () => {
    const action = {
      type: REQUEST_RECIPE
    }

    expect(recipe(recipeState(), action)).toMatchSnapshot()
  })

  it('handles RECEIVE_RECIPE', () => {
    const action = {
      type: RECEIVE_RECIPE,
      payload: recipeState()
    }

    expect(recipe(undefined, action)).toMatchSnapshot()
  })
})
