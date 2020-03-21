import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import { Helmet } from 'react-helmet'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet></Helmet>
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
