// @flow

import { normalize, schema } from 'normalizr'
import type { Recipe, NormalizedRecipes } from '../types'

const recipe = new schema.Entity('recipes', {}, { idAttribute: 'id' })

export function normalizeRecipes (data: Array<Recipe>): NormalizedRecipes {
  return normalize(data, [ recipe ])
}
