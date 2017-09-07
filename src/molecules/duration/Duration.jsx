// @flow

import React from 'react'

import ClockIcon from 'react-icons/lib/fa/clock-o'

const readableDuration = (duration) => {
  if (duration < 60) {
    return `${duration} minutes`
  }

  const hours = Math.floor(duration / 60)
  const minutes = duration % 60

  if (minutes !== 0) {
    return `${hours}h ${minutes}`
  }
  return `${hours}`
}

const Duration = ({number}: { number: number }) => (
  <span>
    <ClockIcon className='mr-1' />
    {readableDuration(number)}
  </span>
)

export default Duration
