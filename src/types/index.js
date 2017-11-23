// @flow

export type Difficulty = 'easy' | 'medium' | 'difficult'
export type Servings = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type RecipeSummary = {
  id: number,
  name: string,
  difficulty: Difficulty,
  servings: Servings,
  duration: number
}

export type QuantityUnit = 'pinch' | 'cup' | 'teaspoon' | 'tablespoon' | 'ml' | 'gr' | 'piece'

type SimpleStep = { isRecipe: false, description: string }
type ReferenceStep = { isRecipe: true, id: number, name: string }
export type Step = SimpleStep | ReferenceStep

export type RecipeDetail = {
  quantities: Array<{ name: string, unit: QuantityUnit, amount: number }>,
  steps: Array<Step>,
  ...RecipeSummary
}

// State

type Result = Array<number>

export type NormalizedRecipes = {
  result: Result,
  recipes: { [string]: RecipeSummary }
}
