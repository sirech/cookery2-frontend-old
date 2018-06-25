import { combineReducers } from 'redux'
import * as R from 'ramda'

import {
  constants as recipesConstants,
  reducer as recipesReducer,
} from './recipes'
import {
  constants as recipeConstants,
  reducer as recipeReducer,
} from './recipe'
import { constants as formConstants, reducer as formReducer } from './form'

export const actionPicker = list => {
  return actions => {
    const h = R.pick(list)(actions)

    if (Object.keys(h).length !== list.length) {
      throw new Error(
        `Not all requested actions (${list}) exist in the given actions`
      )
    }

    return h
  }
}

const rootReducer = combineReducers({
  [recipesConstants.namespace]: recipesReducer,
  [recipeConstants.namespace]: recipeReducer,
  [formConstants.namespace]: formReducer,
})

export default rootReducer
