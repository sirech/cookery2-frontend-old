import React from 'react'
import { fullRender } from 'test'

import Step from './Step'

describe('components', () => {
  describe('Step', () => {
    it('renders correctly for simple steps', () => {
      const { component } = fullRender(<Step isRecipe={false} description='This is just a step' />)
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('renders correctly for reference steps', () => {
      const { component } = fullRender(<Step isRecipe name='name of the step' id={3} />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
