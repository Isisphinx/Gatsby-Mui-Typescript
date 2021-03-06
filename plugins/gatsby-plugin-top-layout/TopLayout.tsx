import React from 'react'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../src/theme'

const TopLayout = props => (
  <React.Fragment>
    <Helmet>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
    </Helmet>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  </React.Fragment>
)

export default TopLayout
