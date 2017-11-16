import * as R from 'ramda'

import { namespace } from './constants'

const recipesSelector = R.path([namespace, 'entities', 'recipes'])
export default recipesSelector
