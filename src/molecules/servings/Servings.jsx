// @flow

import React from 'react'

import CutleryIcon from 'react-icons/lib/fa/cutlery'

import type { Servings as ServingsType } from 'types'

const Servings = ({ number }: { number: ServingsType }) => (
  <span>
    <CutleryIcon className="mr-1" />
    {number}
  </span>
)

export default Servings
