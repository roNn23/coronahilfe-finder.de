import React from 'react'
import './Header.scss'
import Container from 'react-bootstrap/Container'
import Navigation from '../Navigation'

const Header = () => {
  const env = process.env.GATSBY_ENV
  return (
    <Container className="component-header">
      {env && env !== 'prod' && <p className="component-header__env">Environment: {env}</p>}
      <Navigation />
    </Container>
  )
}

export default Header
