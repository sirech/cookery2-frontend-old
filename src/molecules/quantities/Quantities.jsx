// @flow

import React from 'react'

import { Col, Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'

import Quantity from 'atoms/quantity'

import './styles.css'

import type { Quantity as QuantityType } from 'types'

const renderQuantity = (quantity: QuantityType) => (
  <ListGroupItem key={quantity.name} className="quantity">
    <Quantity {...quantity} />
  </ListGroupItem>
)

const Quantities = ({ items }: { items: Array<QuantityType> }) => (
  <Col xs="12" lg="6" className="mb-3">
    <Card>
      <CardHeader>
        <h6>Quantities</h6>
      </CardHeader>
      <ListGroup flush>
        {items.map(quantity => renderQuantity(quantity))}
      </ListGroup>
    </Card>
  </Col>
)

Quantities.defaultProps = { items: [] }

export default Quantities
