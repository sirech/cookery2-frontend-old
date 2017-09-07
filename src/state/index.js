import { combineReducers } from 'redux'

import { constants as recipesConstants, reducer as recipesReducer } from './recipes'

const rootReducer = combineReducers({
  [recipesConstants.namespace]: recipesReducer
})

export default rootReducer
