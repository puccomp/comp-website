import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  shape: {
    borderRadius: 2,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#2273E2',
    },
    secondary: {
      main: '#BD93F9',
    },
    background: {
      default: '#0D1117',
      paper: '#151B23',
      navs: '#010409',
    },
    divider: '#3D444D',
  },
  typography: {
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
  },
})

export default theme
