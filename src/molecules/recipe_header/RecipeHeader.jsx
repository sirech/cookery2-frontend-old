// @flow

import React from 'react'

import { Col, Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'

import Difficulty from 'molecules/difficulty'
import Servings from 'molecules/servings'
import Duration from 'molecules/duration'

import type { RecipeSummary } from 'types'

const RecipeHeader = ({
  id,
  name,
  difficulty,
  servings,
  duration,
}: RecipeSummary) => (
  <Col xs="12" className="mb-3">
    <Card>
      <CardHeader>
        <h4>{name}</h4>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem>
          <Difficulty level={difficulty} />
        </ListGroupItem>
        <ListGroupItem>
          <Servings number={servings} />
        </ListGroupItem>
        <ListGroupItem>
          <Duration number={duration} />
        </ListGroupItem>
      </ListGroup>
    </Card>
  </Col>
)

export default RecipeHeader
