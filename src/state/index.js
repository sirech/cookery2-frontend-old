import { combineReducers } from 'redux'

import {
  constants as recipesConstants,
  reducer as recipesReducer,
} from './recipes'
import {
  constants as recipeConstants,
  reducer as recipeReducer,
} from './recipe'
import { constants as formConstants, reducer as formReducer } from './form'

const rootReducer = combineReducers({
  [recipesConstants.namespace]: recipesReducer,
  [recipeConstants.namespace]: recipeReducer,
  [formConstants.namespace]: formReducer,
})

export default rootReducer
