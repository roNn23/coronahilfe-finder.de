import { Link } from 'gatsby'
import React from 'react'
import './Header.scss'

const Header = () => (
  <header className="component-header">
    <div className="component-header__logo-wrap">
      <Link to="/">Coronahilfe Finder</Link>
    </div>
  </header>
)

export default Header
