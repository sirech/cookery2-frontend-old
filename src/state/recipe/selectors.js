import * as R from 'ramda'

import { namespace } from './constants'

const recipeSelector = R.path([namespace])
export default recipeSelector
