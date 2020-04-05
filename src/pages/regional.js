import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Content from '../components/Content'
import RegionalPageContent from '../components/RegionalPageContent'
import RegionalPageOffers from '../components/RegionalPageOffers'

const RegionalPage = ({ location: { pathname } }) => {
  const lastSegmentPathname = pathname.split('/').pop()

  const isRegionalPage = () => {
    return lastSegmentPathname.includes('regional') || !lastSegmentPathname
  }

  return (
    <Layout>
      <SEO title="Regionale Coronahilfen" />
      <Content>
        {isRegionalPage() && <RegionalPageContent />}
        {!isRegionalPage() && <RegionalPageOffers postalcode={lastSegmentPathname} />}
      </Content>
    </Layout>
  )
}

RegionalPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default RegionalPage
