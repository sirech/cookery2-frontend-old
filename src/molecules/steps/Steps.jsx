// @flow

import React from 'react'

import { Col, Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'
import Step from 'atoms/step'

import './styles.css'

import type { Step as StepType } from 'types'

const renderStep = (step: StepType) => (
  <ListGroupItem
    key={step.isRecipe ? step.name : step.description}
    className="step"
  >
    <Step {...step} />
  </ListGroupItem>
)

const Steps = ({ items }: { items: Array<StepType> }) => (
  <Col xs="12" lg="6" className="mb-3">
    <Card>
      <CardHeader>
        <h6>Steps</h6>
      </CardHeader>
      <ListGroup flush>{items.map(step => renderStep(step))}</ListGroup>
    </Card>
  </Col>
)

Steps.defaultProps = { items: [] }

export default Steps
