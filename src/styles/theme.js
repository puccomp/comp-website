import { createTheme } from '@mui/material/styles'
import { typography } from './Texts'

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
  typography: typography,
})

export default theme
