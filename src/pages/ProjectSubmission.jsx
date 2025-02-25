import React from 'react'
import {
  Card,
  Container,
  Typography,
  Box,
  useTheme,
  alpha,
} from '@mui/material'
import ProjectProposalForm from '../components/forms/ProjectProposalForm'
import ParticlesBackground from '../components/ParticlesBackground'

const ProjectSubmission = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <ParticlesBackground />

      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
        }}
      >
        <Card
          sx={{
            padding: 4,
            borderRadius: 2,
            backgroundColor: alpha(theme.palette.background.paper, 0.95),
            border: 1,
            borderColor: 'divider',
          }}
        >
          <Typography variant="h3" gutterBottom align="center">
            Qual ideia você quer transformar em realidade?
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            sx={{ marginBottom: 2 }}
          >
            Nesse formulário, vamos avaliar sua ideia de projeto e entrar em
            contato. Atente-se para descrever seu projeto de forma clara e
            precisa. Seus dados de contato estão restritos e seguros conosco.
          </Typography>
          <ProjectProposalForm />
        </Card>
      </Container>
    </Box>
  )
}

export default ProjectSubmission
