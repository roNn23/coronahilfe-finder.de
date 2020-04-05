import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title, useTemplate }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            imageUrl
            imageType
            imageWidth
            imageHeight
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description
  const titleTemplate = useTemplate ? `%s | ${site.siteMetadata.title}` : ''

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: site.siteMetadata.imageUrl,
        },
        {
          property: 'og:image:type',
          content: site.siteMetadata.imageType,
        },
        {
          property: 'og:image:width',
          content: site.siteMetadata.imageWidth,
        },
        {
          property: 'og:image:height',
          content: site.siteMetadata.imageHeight,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'de',
  meta: [],
  description: '',
  useTemplate: true,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  useTemplate: PropTypes.bool,
}

export default SEO
