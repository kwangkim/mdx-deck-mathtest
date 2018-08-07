import React from 'react'
import Box from 'superbox'
import 'katex/dist/katex.min.css'

export default ({ children }) =>
  <Box
    p={4}
    bg='link'
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      '& a': {
        fontWeight: 'bold',
        color: 'inherit'
      }
    }}>
    {children}
  </Box>
