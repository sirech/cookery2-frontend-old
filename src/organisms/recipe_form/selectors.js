// @flow

import * as R from 'ramda'

import { formSelector } from 'state/form'

export const validSelector = R.pipe(formSelector, R.path(['valid']))
