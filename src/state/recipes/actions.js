// @flow

import { fetch, normalizeRecipes } from '../../rest'

import { REQUEST_RECIPES, RECEIVE_RECIPES } from './constants'

import type { RecipeSummary } from '../../types'

const requestRecipes = () => ({
  type: REQUEST_RECIPES
})

const receiveRecipes = (recipes: Array<RecipeSummary>) => ({
  type: RECEIVE_RECIPES,
  payload: recipes
})

export function fetchRecipes () {
  return (dispatch: Dispatch) => {
    dispatch(requestRecipes())

    return fetch('/recipes')
      .then(response => response.json())
      .then(json => normalizeRecipes(json))
      .then(recipes => dispatch(receiveRecipes(recipes)))
  }
}
