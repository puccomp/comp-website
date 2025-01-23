import React from 'react'
import { Box, Typography } from '@mui/material'

const SectionTitle = ({
  title,
  barColor = 'primary.main',
  titleSize = 'h5',
  barHeightMultiplier = 1.5,
  sx,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        ...sx,
      }}
    >
      {/* RECTANGLE  */}
      <Box
        sx={{
          width: '4px',
          height: `calc(${barHeightMultiplier} * 1em)`,
          backgroundColor: barColor,
          borderRadius: 2,
        }}
      />
      {/* TITLE  */}
      <Typography component="h2" variant={titleSize}>
        {title}
      </Typography>
    </Box>
  )
}

export default SectionTitle
