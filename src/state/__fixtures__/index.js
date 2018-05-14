import recipes from './recipes'
import form from './form'

import * as rest from './rest'

const recipe = () => rest.recipe
const state = { recipes: recipes(), recipe: recipe(), form: form() }

export { recipes, recipe, rest }
export default () => state
