import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MuiLink from '@material-ui/core/Link'
import ProTip from '../components/ProTip'
import Link from '../components/Link'

const MadeWithLove = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Built with love by the '}
    <MuiLink color="inherit" href="https://material-ui.com/">
      Material-UI
    </MuiLink>
    {' team.'}
  </Typography>
)

const App = () => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Gatsby v4-beta example
      </Typography>
      <Link to="/">Go to the main page</Link>
      <ProTip />
      <MadeWithLove />
    </Box>
  </Container>
)

export default App
