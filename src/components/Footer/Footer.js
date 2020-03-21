import { Link } from 'gatsby'
import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="component-footer">
      <div className="component-footer__link-wrap">
        <Link to="/impressum/" className="component-footer__link">
          Impressum
        </Link>
        <Link to="/datenschutz/" className="component-footer__link">
          Datenschutz
        </Link>
      </div>
      <div className="component-footer__copyright">© {new Date().getFullYear()} – Coronahilfe Finder</div>
    </footer>
  )
}

export default Footer
