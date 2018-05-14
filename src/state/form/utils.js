// @flow

import { namespace, recipeModel } from './constants'

export const modelName = (field?: string) => {
  const model = `${namespace}.${recipeModel}`
  return field ? `${model}.${field}` : model
}
