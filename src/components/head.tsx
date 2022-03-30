import React from 'react'
import Helmet from 'react-helmet'

import { useSiteMetadata } from '../hooks/use-site-metadata'

import ogImage from '../images/icon.png'

const Head = ({ pageTitle = '', pageDescription = '' }) => {
  const { title, description, author } = useSiteMetadata()

  const metaTitle = pageTitle || title || ''
  const metaDescription = pageDescription || description || ''

  return (
    <Helmet titleTemplate={`%s | ${author}`}>
      <html lang="en" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta name="theme-color" content="#0CD6C9" />
    </Helmet>
  )
}

export default Head
