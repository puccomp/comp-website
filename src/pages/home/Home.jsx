import { Typography, Box, Stack, Button } from '@mui/material'

// COMPONENTS
import ParticlesBackground from '../../components/ParticlesBackground'
import WhyUsSection from './WhyUsSection'
import OurServicesSection from './OurServicesSection'
import FAQSection from './FAQSection'
import OurProjectsSection from './OurProjectsSection'
import OCompAnimation from '../../components/OCompAnimation'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <>
      <ParticlesBackground />
      <Box
        component="section"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            opacity: 0.08,
          }}
        >
          <OCompAnimation size="400" dur="90s" repeatCount="1" />
        </Box>
        <Box textAlign="center">
          <Typography component="h1" variant="h2" fontWeight="bold">
            CONHEÇA A COMP
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: 4,
              borderRadius: 2,
              bgcolor: 'primary.main',
              mt: 0.5,
              mb: 1,
              mx: 'auto',
            }}
          />
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ mb: 2.5 }}
          >
            A empresa júnior de computação da PUC Minas.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="small"
              sx={{ px: 2, zIndex: 2 }}
              onClick={() => navigate('/desenvolva')}
            >
              Desenvolva seu projeto conosco!
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurServicesSection />
      <WhyUsSection />
      <OurProjectsSection />
      <FAQSection />
    </>
  )
}

export default Home
