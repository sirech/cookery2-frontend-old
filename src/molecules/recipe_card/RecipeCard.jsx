// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import { Col, Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'

import Difficulty from '../difficulty'
import Servings from '../servings'
import Duration from '../duration'

import type { Difficulty as DifficultyType, Servings as ServingsType } from '../../types'

type Props = {
  id: number,
  name: string,
  difficulty: DifficultyType,
  servings: ServingsType,
  duration: number
}

const RecipeCard = ({id, name, difficulty, servings, duration}: Props) => (
  <Col xs='12' sm='6' md='4' lg='3' className='mb-3'>
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
