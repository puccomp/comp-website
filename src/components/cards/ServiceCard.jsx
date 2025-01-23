import { Card, Divider, Typography, Box } from '@mui/material'

const ServiceCard = ({
  icon,
  title,
  description,
  customStyles,
  iconStyles,
}) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 1,
        border: 1,
        borderColor: 'divider',
        py: 4,
        px: 2,
        ...customStyles,
      }}
    >
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          color: 'white',
          mx: 'auto',
          ...iconStyles,
        }}
      >
        {icon}
      </Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Typography variant="body1" sx={{ mt: 2 }}>
        {description}
      </Typography>
    </Card>
  )
}

export default ServiceCard
