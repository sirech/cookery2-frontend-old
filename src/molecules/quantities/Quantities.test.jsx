import React from 'react'
import renderer from 'react-test-renderer'

import Quantities from './Quantities'

import { recipe } from 'state/__fixtures__'

describe('components', () => {
  describe('Quantities', () => {
    it('renders correctly', () => {
      const component = renderer.create(<Quantities items={recipe().quantities} />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
