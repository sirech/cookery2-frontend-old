import React from 'react'
import renderer from 'react-test-renderer'
import Difficulty from './Difficulty'

describe('components', () => {
  describe('Difficulty', () => {
    it('renders correctly', () => {
      const component = renderer.create(<Difficulty level='easy' />)
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('renders different difficulties', () => {
      const component = renderer.create(<Difficulty level='medium' />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
