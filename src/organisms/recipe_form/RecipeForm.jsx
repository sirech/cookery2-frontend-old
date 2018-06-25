// @flow

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Form, Control } from 'react-redux-form'
import { FormGroup, Label, Input as BaseInput, Button } from 'reactstrap'

import { validSelector } from './selectors'
import { actionPicker } from 'state'
import { modelName, actions } from 'state/form'

import Input from 'organisms/input'

import type { Difficulty, RecipeForm as RecipeFormType } from 'types'
type Props = {
  valid: boolean,
  create: RecipeFormType => void,
}

// exported for testing
export class RecipeForm extends React.Component<Props> {
  static difficulties(): Array<Difficulty> {
    return ['easy', 'medium', 'difficult']
  }

  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(recipe: RecipeFormType) {
    this.props.create(recipe)
  }

  render() {
    const { valid } = this.props

    return (
      <Form model={modelName()} onSubmit={this.handleSubmit}>
        <Input
          name="name"
          type="text"
          placeholder="Awesome Recipe"
          validators={{ length: val => val && val.length > 0 }}
          messages={{
            length: 'Name cannot be empty',
          }}
        />

        <FormGroup>
          <Label for="difficulty">Difficulty</Label>
          <Control
            model=".difficulty"
            type="select"
            name="difficulty"
            id="difficulty"
            component={BaseInput}
          >
            {RecipeForm.difficulties().map(difficulty => (
              <option key={difficulty}>{difficulty}</option>
            ))}
          </Control>
        </FormGroup>

        <Input
          name="servings"
          type="number"
          validators={{
            value: val => val >= 1 && val <= 10,
          }}
          messages={{
            value: 'It should be between 1 and 10',
          }}
        />

        <Input
          name="duration"
          type="number"
          validators={{
            value: val => val >= 1 && val < 600,
          }}
          messages={{
            value: 'It should be between 1 and 600',
          }}
        />

        <Button
          color="primary"
          type="submit"
          className="float-right"
          disabled={!valid}
        >
          Create Recipe
        </Button>
      </Form>
    )
  }
}

export default connect(
  (state, props) =>
    createStructuredSelector({
      valid: validSelector,
    })(state, props),
  actionPicker(['create'])(actions)
)(RecipeForm)
