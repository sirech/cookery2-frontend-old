import recipes from './recipes'
import * as rest from './rest'

const state = { recipes: recipes() }

export { recipes, rest }
export default () => state
