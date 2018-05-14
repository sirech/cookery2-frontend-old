// @flow

import React from 'react'

import type { Quantity as QuantityType } from 'types'

const Quantity = ({ name, unit, amount }: QuantityType) => (
  <div>
    <span className="text-capitalize">{name}</span>
    <span className="font-italic float-right">{`${amount} ${unit}`}</span>
  </div>
)

export default Quantity
