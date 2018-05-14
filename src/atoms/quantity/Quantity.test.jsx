import React from 'react'
import renderer from 'react-test-renderer'

import Quantity from './Quantity'

describe('components', () => {
  describe('Quantity', () => {
    it('renders correctly', () => {
      const component = renderer.create(
        <Quantity name="Olive oil" unit="ml" amount={50} />
      )
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
