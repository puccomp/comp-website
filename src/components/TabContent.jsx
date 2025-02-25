import { Box, styled } from '@mui/material'

const Tab = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.secondary,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
  },
}))

const TabContent = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tab-content"
      hidden={value !== index}
      id={`tab-content-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Tab>{children}</Tab>}
    </div>
  )
}

export default TabContent
