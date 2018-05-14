// @flow

export type Difficulty = 'easy' | 'medium' | 'difficult'
export type Servings = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type RecipeForm = {
  id: number,
  name: string,
  difficulty: Difficulty,
  servings: Servings,
  duration: number,
}
export type RecipeSummary = RecipeForm & { id: number }

export type QuantityUnit =
  | 'pinch'
  | 'cup'
  | 'teaspoon'
  | 'tablespoon'
  | 'ml'
  | 'gr'
  | 'piece'
export type Quantity = { name: string, unit: QuantityUnit, amount: number }

export type SimpleStep = { isRecipe: false, description: string }
export type ReferenceStep = { isRecipe: true, id: number, name: string }
export type Step = SimpleStep | ReferenceStep

export type RecipeDetail = {
  quantities: Array<Quantity>,
  steps: Array<Step>,
  ...RecipeSummary,
}

// State

type Result = Array<number>

export type NormalizedRecipes = {
  result: Result,
  recipes: { [string]: RecipeSummary },
}
