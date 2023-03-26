import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const SEO = ( {title} ) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
    `
  )

  return (
    <>
      <title>{title} | {site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="og:title" content={site.siteMetadata.title} />
      <meta name="og:description" content={site.siteMetadata.description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="{title} | {site.siteMetadata.title}" />
      <meta name="twitter:description" content={site.siteMetadata.description} />
    </>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
