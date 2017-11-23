import state from 'state/__fixtures__'
import recipesSelector from './selectors'

describe('recipesSelector', () => {
  it('orders the books as categories', () => {
    expect(recipesSelector(state())).toMatchSnapshot()
  })
})
