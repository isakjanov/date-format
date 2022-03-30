import React from 'react'

import Head from './head'

type LayouProps = {
  pageTitle?: string
  pageDescription?: string
  children: React.ReactNode
}

const Layout = ({
  pageTitle = '',
  pageDescription = '',
  children,
}: LayouProps) => (
  <>
    <Head pageTitle={pageTitle} pageDescription={pageDescription} />
    {children}
  </>
)

export default Layout
