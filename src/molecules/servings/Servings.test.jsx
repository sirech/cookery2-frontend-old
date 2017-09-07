import React from 'react'
import renderer from 'react-test-renderer'
import Servings from './Servings'

describe('components', () => {
  describe('Servings', () => {
    it('renders correctly', () => {
      const component = renderer.create(<Servings number={3} />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
