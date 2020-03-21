import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Content from '../components/Content'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Nicht gefunden" />
    <Content>
      <h1>Nicht gefunden</h1>
      <p>Diese Seite wurde leider nicht gefunden.</p>
    </Content>
  </Layout>
)

export default NotFoundPage
