// @flow

import { normalize, schema } from 'normalizr'
import type { RecipeSummary, NormalizedRecipes } from 'types'

const recipe = new schema.Entity('recipes', {}, { idAttribute: 'id' })

export function normalizeRecipes (data: Array<RecipeSummary>): NormalizedRecipes {
  return normalize(data, [ recipe ])
}
