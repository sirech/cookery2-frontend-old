/**
 * @jest-environment node
 */
import * as R from 'ramda'
import { Matchers } from 'pact'

import { mockStore, createProvider } from 'test'

import { fetchRecipes } from './recipes/actions'
import { fetchRecipe } from './recipe/actions'
import { create } from './form/actions'

import { recipes, recipe, rest } from './__fixtures__'

describe('pacts', () => {
  let store

  beforeEach(() => {
    store = mockStore({})
  })

  const provider = createProvider()

  beforeAll(() => provider.setup(), 5 * 60 * 1000)
  afterAll(() => provider.finalize(), 5 * 60 * 1000)

  describe('recipes - fetchRecipes', () => {
    beforeAll(async () => {
      const interaction = {
        state: 'i have some recipes',
        uponReceiving: 'a request for a list of recipes',
        withRequest: {
          method: 'GET',
          path: '/rest/recipes',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: rest.recipes,
        },
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'recipes:request' },
        {
          type: 'recipes:receive',
          payload: R.pick(['entities', 'result'])(recipes()),
        },
      ]

      return store.dispatch(fetchRecipes()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })

  describe('recipe - fetchRecipe', () => {
    beforeAll(async () => {
      const interaction = {
        state: 'i have some recipes',
        uponReceiving: 'a request for a concrete recipe',
        withRequest: {
          method: 'GET',
          path: `/rest/recipes/${recipe().id}`,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: rest.recipe,
        },
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        { type: 'recipe:request' },
        { type: 'recipe:receive', payload: recipe() },
      ]

      return store.dispatch(fetchRecipe(recipe().id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })

  describe('recipe - createRecipe', () => {
    const recipeForm = R.omit(['id'])(rest.recipe)

    beforeAll(async () => {
      const interaction = {
        state: 'i am logged in',
        uponReceiving: 'a request to create a new recipe',
        withRequest: {
          method: 'POST',
          path: '/rest/recipes',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
          body: { recipe: recipeForm },
        },
        willRespondWith: {
          status: 201,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: Matchers.somethingLike(rest.recipe),
        },
      }

      return provider.addInteraction(interaction)
    }, 5 * 60 * 1000)
    afterAll(() => provider.verify(), 5 * 60 * 1000)

    it('should dispatch the correct actions', () => {
      const expectedActions = [
        {
          type: 'recipes:recipe:create:success',
          payload: rest.recipe,
        },
        { type: 'rrf/reset', model: 'form.recipe' },
      ]

      return store.dispatch(create(recipeForm)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
