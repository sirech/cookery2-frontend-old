// @flow

import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { Row } from 'reactstrap'
import * as R from 'ramda'

import { actions } from 'state/recipes'
import recipesSelector from './selectors'

import RecipeCard from 'molecules/recipe_card'

import type { RecipeSummary } from 'types'

type Props = {
  recipes: Array<RecipeSummary>,
  fetchRecipes: (void) => void
}

class RecipesList extends React.Component {
  props: Props

  componentDidMount () {
    this.props.fetchRecipes()
  }

  renderRecipe (recipe) {
    return (
      <RecipeCard key={recipe.id} {...recipe} />
    )
  }

  render () {
    const { recipes } = this.props

    return (
      <Row tag='ul' className='list-unstyled'>
        {recipes.map(recipe => this.renderRecipe(recipe)) }
      </Row>
    )
  }
}

export default connect(
  (state, props) => createStructuredSelector({
    recipes: recipesSelector
  })(state),
  R.pick(['fetchRecipes'])(actions)
)(RecipesList)
