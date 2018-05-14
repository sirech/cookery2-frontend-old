import { REQUEST_RECIPE, RECEIVE_RECIPE } from './constants'

const initialState = { recipe: {} }

function recipe(state = initialState, action) {
  switch (action.type) {
    case REQUEST_RECIPE:
      return initialState
    case RECEIVE_RECIPE:
      return action.payload
    default:
      return state
  }
}

export default recipe
