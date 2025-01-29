import { styled, Typography } from '@mui/material'

export const typography = {
  fontFamily: 'Poppins, Arial, sans-serif',
  h2: {
    fontWeight: 'bold',
    fontSize: '2.5rem',
    '@media (min-width:600px)': {
      fontSize: '3rem',
    },
  },
  h3: {
    // SECTION HIGHLIGHT
    fontWeight: 600,
    fontSize: '1.75rem',
    '@media (min-width:600px)': {
      fontSize: '2rem',
    },
  },
  h4: {
    // SECTION TITLE
    fontWeight: 600,
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '1.75rem',
    },
  },
  h5: {
    // TOPIC TITLE
    fontWeight: 600,
    fontSize: '1.25rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
  },
}

export const Paragraph = styled(Typography)(({ theme, color }) => ({
  marginBottom: '16px',
  color: color || theme.palette.text.secondary,
}))
