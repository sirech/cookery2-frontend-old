import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import { Col, Container, Row } from 'reactstrap'

import Header from 'molecules/header'
import RecipeDetail from 'organisms/recipe_detail'
import RecipesList from 'organisms/recipes_list'
import RecipeForm from 'organisms/recipe_form'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Redirect to="/recipes" />} />
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
      <Col xs="12">
        <Switch>
          <Route exact path="/recipes/new" component={RecipeForm} />
          <Route exact path="/recipes/:id" component={RecipeDetail} />
          <Route exact path="/recipes" component={RecipesList} />
        </Switch>
      </Col>
    </Row>
  </Container>
)

export default App
