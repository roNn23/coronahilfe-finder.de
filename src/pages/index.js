import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Content from '../components/Content'
import AddressSearch from '../components/AddressSearch'
import { Link } from 'gatsby'

const IndexPage = () => {
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

  return (
    <Layout>
      <SEO title={site.siteMetadata.title} useTemplate={false} />
      <Content padding>
        <h1>Coronahilfe Finder</h1>
        <p className="pb-4">Hallo Welt!</p>
        <AddressSearch />
        <Link to="/subpage">Unterseite</Link>
      </Content>
    </Layout>
  )
}

export default IndexPage
