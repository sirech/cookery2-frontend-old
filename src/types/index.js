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

// State

type Result = Array<number>

export type NormalizedRecipes = {
  result: Result,
  recipes: { [string]: RecipeSummary }
}
