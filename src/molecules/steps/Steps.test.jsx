import React from 'react'
import { fullRender } from 'test'

import Steps from './Steps'

import { recipe } from 'state/__fixtures__'

describe('components', () => {
  describe('Steps', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<Steps items={recipe().steps} />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
