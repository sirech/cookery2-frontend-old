// @flow

import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import * as R from 'ramda'

import { Row } from 'reactstrap'

import RecipeHeader from 'molecules/recipe_header'
import Quantities from 'molecules/quantities'

import { actions, recipeSelector } from 'state/recipe'

import type { RecipeDetail as RecipeDetailType } from 'types'

type Props = {
  match: { params: { id?: string } },
  recipe: RecipeDetailType,
  fetchRecipe: (string) => void
}

class RecipeDetail extends React.Component {
  static defaultProps: Props
  props: Props

  static getId (props) {
    return R.path(['match', 'params', 'id'], props)
  }

  componentDidMount () {
    const id = RecipeDetail.getId(this.props)

    if (id) {
      this.props.fetchRecipe(id)
    }
  }

  componentWillUpdate (nextProps: Props) {
    const id = RecipeDetail.getId(this.props)
    const newId = RecipeDetail.getId(nextProps)

    if (id && newId && id !== newId) {
      this.props.fetchRecipe(newId)
    }
  }

  render () {
    const { recipe } = this.props

    return (
      <Row>
        <RecipeHeader {...recipe} />
        <Quantities items={recipe.quantities} />
      </Row>
    )
  }
}

export default connect(
  (state, props) => createStructuredSelector({
    recipe: recipeSelector
  })(state),
  R.pick(['fetchRecipe'])(actions)
)(RecipeDetail)
