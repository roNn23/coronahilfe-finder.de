import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from './logo.svg'
import './Navigation.scss'

const Navigation = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            menu {
              name
              path
            }
          }
        }
      }
    `,
  )

  return (
    <div className="comp-navigation">
      <Navbar expand="md" className="comp-navigation__navbar">
        <Link to={'/'} className="navbar-brand comp-navigation__navbar-brand">
          <img className={'comp-navigation__logo'} src={logo} alt={data.site.siteMetadata.title} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto comp-navigation__nav">
            {data.site.siteMetadata.menu.map((link, index) => (
              <div className={'comp-navigation__nav-link-wrap'} key={index}>
                <Link
                  to={link.path}
                  className={'comp-navigation__nav-link'}
                  activeClassName="comp-navigation__nav-link--active"
                  partiallyActive={true}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
