import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Content from '../components/Content'

const SubPage = () => {
  return (
    <Layout>
      <SEO title="Subpage" />
      <Content>
        <h1 className="mb-4">Subpage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos laborum provident dignissimos nostrum
          consequuntur, error eaque odio vero. Voluptates aliquam blanditiis molestiae eum praesentium? Expedita cum
          libero porro voluptatum!
        </p>
      </Content>
    </Layout>
  )
}

export default SubPage
