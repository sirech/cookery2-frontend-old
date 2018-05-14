import { combineReducers } from 'redux'

import {
  constants as recipesConstants,
  reducer as recipesReducer,
} from './recipes'
import {
  constants as recipeConstants,
  reducer as recipeReducer,
} from './recipe'

const rootReducer = combineReducers({
  [recipesConstants.namespace]: recipesReducer,
  [recipeConstants.namespace]: recipeReducer,
})

export default rootReducer
