import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import './index.css'

import Favicon16 from '../assets/favicons/favicon-16x16.png'
import Favicon32 from '../assets/favicons/favicon-32x32.png'
import FaviconApple from '../assets/favicons/apple-touch-icon.png'

const Wrapper = styled.main`
  max-width: 650px;
  margin: 0 auto;
  font-family: sans-serif;
`

const Layout = ({ children, data }) => (
  <React.Fragment>
    <Helmet>
      <title>HNL</title>
      <meta name="description" content="HNL" />
      <link rel="apple-touch-icon" sizes="180x180" href={FaviconApple} />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Wrapper>{children()}</Wrapper>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
