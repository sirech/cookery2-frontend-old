import React from 'react'
import renderer from 'react-test-renderer'

import Duration from './Duration'

describe('components', () => {
  describe('Duration', () => {
    it('renders correctly for less than one hour', () => {
      const duration = renderer.create(<Duration number={45} />)
      expect(duration.toJSON()).toMatchSnapshot()
    })

    it('renders correctly for exact hours', () => {
      const duration = renderer.create(<Duration number={120} />)
      expect(duration.toJSON()).toMatchSnapshot()
    })

    it('renders correctly for mixed times', () => {
      const duration = renderer.create(<Duration number={150} />)
      expect(duration.toJSON()).toMatchSnapshot()
    })
  })
})
