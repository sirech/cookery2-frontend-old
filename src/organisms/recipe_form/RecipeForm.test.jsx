import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { RecipeForm } from './RecipeForm'

describe('components', () => {
  describe('RecipeForm', () => {
    it('renders correctly', () => {
      const component = shallow(<RecipeForm stars={3} />)
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
