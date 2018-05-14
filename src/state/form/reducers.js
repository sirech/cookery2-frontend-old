// @flow

import { namespace, recipeModel } from './constants'
import { combineForms } from 'react-redux-form'

import type { RecipeForm as Recipe } from 'types'

const initialRecipe: Recipe = {
  name: '',
  difficulty: 'easy',
  servings: 1,
  duration: 0,
}

export default combineForms(
  {
    [recipeModel]: initialRecipe,
  },
  namespace
)
