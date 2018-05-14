import { REQUEST_RECIPES, RECEIVE_RECIPES } from './constants'

const initialState = {
  entities: {
    recipes: {},
  },
}

function recipes(state = initialState, action) {
  switch (action.type) {
    case REQUEST_RECIPES:
      return initialState
    case RECEIVE_RECIPES:
      return action.payload
    default:
      return state
  }
}

export default recipes
