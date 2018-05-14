// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Helmet } from 'react-helmet'

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
} from 'reactstrap'

type State = {
  isOpen: boolean,
}

class Header extends React.Component {
  state: State
  toggle: Function

  constructor() {
    super()

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <header className="mb-4">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cookery</title>
        </Helmet>
        <Navbar dark color="dark" expand="sm">
          <LinkContainer to="/recipes">
            <NavbarBrand>Recipes</NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/recipes/new" className="nav-link">
                  Add Recipe
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Header
