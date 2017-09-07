// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import { Col, Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'

import Difficulty from '../difficulty'
import Servings from '../servings'
import Duration from '../duration'

import type { RecipeSummary } from '../../types'

const RecipeCard = ({id, name, difficulty, servings, duration}: RecipeSummary) => (
  <Col xs='12' sm='6' md='4' lg='3' className='mb-3' tag='li'>
    <Card>
      <CardHeader>
        <h4>
          <Link to={`/recipes/${id}`}>{name}</Link>
        </h4>
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

export default RecipeCard
