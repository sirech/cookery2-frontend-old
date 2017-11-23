import recipes from './recipes'
import * as rest from './rest'

const recipe = () => rest.recipe
const state = { recipes: recipes(), recipe: recipe() }

export { recipes, recipe, rest }
export default () => state
