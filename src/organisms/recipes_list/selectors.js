import * as R from 'ramda'
import { createSelector } from 'reselect'

import { recipesSelector as baseSelector } from 'state/recipes'

const recipesSelector = createSelector(
  baseSelector,
  R.pipe(R.values, R.sortBy(R.prop('name')))
)
export default recipesSelector
