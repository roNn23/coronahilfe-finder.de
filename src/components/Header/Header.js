import { Link } from 'gatsby'
import React from 'react'
import './Header.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './logo.svg'

const Header = () => (
  <Container className="component-header">
    <Row className="component-header__logo-wrap">
      <Col>
        <Link to="/">
          <img src={logo} alt="Logo Coronahilfe Finder" className="component-header__logo" />
        </Link>
      </Col>
    </Row>
  </Container>
)

export default Header
