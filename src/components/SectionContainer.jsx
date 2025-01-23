import React from 'react'
import { Box, Divider, Paper, useTheme } from '@mui/material'
import SectionTitle from './SectionTitle'

const SectionContainer = ({
  title,
  barColor,
  titleBgColor,
  contentPadding = { xs: 1, md: 2 },
  children,
}) => {
  const theme = useTheme()

  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{
        background: 'transparent',
        width: '100%',
      }}
    >
      <Box
        sx={{
          padding: { xs: 1, md: 2 },
          backgroundColor: titleBgColor || theme.palette.background.paper,
        }}
      >
        <SectionTitle title={title} barColor={barColor} titleSize="h5" />
      </Box>

      <Divider />

      <Box sx={{ p: contentPadding }}>{children}</Box>
    </Paper>
  )
}

export default SectionContainer
