import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import { Col, Container, Row } from 'reactstrap'

import Header from './molecules/header'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' render={() => (
            <Redirect to='/recipes' />
          )} />
          <Header />
          <Content />
        </div>
      </Router>
    )
  }
}

const Content = () => (
  <Container fluid>
    <Row>
      <Col xs='12' />
    </Row>
  </Container>
)

export default App
