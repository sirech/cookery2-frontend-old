import recipes from './recipes'

const state = { recipes: recipes() }

export { recipes }
export default () => state
