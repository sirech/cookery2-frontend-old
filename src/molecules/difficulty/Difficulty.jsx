// @flow

import React from 'react'
import { Badge } from 'reactstrap'

import type { Difficulty as DifficultyType } from 'types'

const classForLevel = (level: DifficultyType) => {
  switch (level) {
    case 'easy':
      return 'success'
    case 'medium':
      return 'warning'
    default:
      return 'danger'
  }
}

const Difficulty = ({level}: { level: DifficultyType }) => (
  <Badge pill color={classForLevel(level)}>
    {level}
  </Badge>
)

export default Difficulty
