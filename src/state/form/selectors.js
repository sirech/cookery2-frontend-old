// @flow

import * as R from 'ramda'

import { namespace, recipeModel } from './constants'

const baseSelector = R.path([namespace])

export const fieldSelectorBuilder = (field: string) =>
  R.pipe(baseSelector, R.path(['forms', recipeModel, field]))
export const formSelector = fieldSelectorBuilder('$form')

export const recipeSelector = R.pipe(baseSelector, R.path([recipeModel]))
