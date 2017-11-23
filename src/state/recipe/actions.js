// @flow

import { fetch } from 'rest'

import { REQUEST_RECIPE, RECEIVE_RECIPE } from './constants'

import type { RecipeDetail } from 'types'

const requestRecipe = () => ({
  type: REQUEST_RECIPE
})

const receiveRecipe = (recipe: RecipeDetail) => ({
  type: RECEIVE_RECIPE,
  payload: recipe
})

export function fetchRecipe (id: number) {
  return (dispatch: Dispatch) => {
    dispatch(requestRecipe())

    return fetch(`/recipes/${id}`)
      .then(response => response.json())
      .then(recipe => dispatch(receiveRecipe(recipe)))
  }
}
