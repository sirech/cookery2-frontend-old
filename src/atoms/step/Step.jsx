// @flow

import React from 'react'

import * as R from 'ramda'
import { Link } from 'react-router-dom'

const renderSimpleStep = ({ description }: Object) => (
  <div>
    <span>{description}</span>
  </div>
)

const renderReferenceStep = ({ id, name }: Object) => (
  <Link to={`/recipes/${id}`}>
    {name}
  </Link>
)

const Step = (props: Object) => (
  <span>
    {props.isRecipe ? renderReferenceStep(R.pick(['name', 'id'])(props)) : renderSimpleStep(R.pick(['description'])(props))}
  </span>
)

export default Step
