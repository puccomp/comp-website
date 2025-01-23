import { Box, Container } from '@mui/material'
import React from 'react'

const UniformSection = ({ ref, bgColor, zIdx = 1, children }) => {
  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        bgcolor: bgColor,
        py: { xs: 2, sm: 4, lg: 6 },
        zIndex: zIdx,
      }}
    >
      <Container>{children}</Container>
    </Box>
  )
}

export default UniformSection
