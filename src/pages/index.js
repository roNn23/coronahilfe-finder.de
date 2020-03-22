import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Content from '../components/Content'
import AddressSearch from '../components/AddressSearch'
import Locations from '../components/Locations'

const IndexPage = () => {
  const [address, setAddress] = useState(null)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  )

  const handleAddressFound = address => {
    setAddress(address)
  }

  return (
    <Layout>
      <SEO title={site.siteMetadata.title} useTemplate={false} />
      <Content padding>
        <h1>Coronahilfe Finder</h1>
        <div className="mb-7">
          <AddressSearch onAddressFound={handleAddressFound} />
        </div>
        {address && <Locations lat={address.lat} lon={address.lon} />}
      </Content>
    </Layout>
  )
}

export default IndexPage
