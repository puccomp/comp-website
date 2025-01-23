import {
  Box,
  Card,
  Stack,
  Chip,
  Avatar,
  Grid2,
  Typography,
  Button,
  Dialog,
  DialogContent,
  LinearProgress,
} from '@mui/material'
import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import UniformSection from '../../components/UniformSection'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { fetchAllProjects, fetchProjectDetails } from '../../api/client' 
import useFetch from '../../hooks/useFetch'


const projects = [
  {
    id: 829664561,
    name: 'bolao-sorte-online-api',
    language: 'Java',
    created_at: '2024-07-16T22:07:31Z',
    image_url: 'https://via.placeholder.com/350x500',
  },
  {
    id: 907144639,
    name: 'comp-website',
    language: 'JavaScript',
    created_at: '2024-12-22T23:35:05Z',
    image_url: 'https://via.placeholder.com/350x500',
  },
  {
    id: 913041724,
    name: 'comp-api',
    language: 'JavaScript',
    created_at: '2025-01-06T23:06:52Z',
    image_url: 'https://via.placeholder.com/350x500',
  },
]

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const formatProjectName = (name) => {
  if (!name || typeof name !== 'string') return ''
  return name.replace(/-/g, ' ')
}

const ProjectCard = ({ name, language, createdAt, selected, onClick }) => {
  return (
    <Card
      variant="outlined"
      onClick={onClick}
      sx={{
        p: 2,
        cursor: 'pointer',
        borderRadius: 2,
        backgroundColor: selected ? 'action.selected' : 'background.paper',
        transition: '0.2s',
        '&:hover': {
          boxShadow: 2,
        },
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <PlayArrowIcon
          fontSize="large"
          sx={{
            color: selected ? 'primary.main' : 'text.secondary',
          }}
        />
        <Typography color="text.primary" variant="h6" fontWeight="bold">
          {formatProjectName(name)}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Typography variant="body2" color="text.secondary">
          {language}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {formatDate(createdAt)}
        </Typography>
      </Stack>
    </Card>
  )
}

const ProjectDetails = ({ open, handleClose, loading, project }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogContent>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4, padding: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            {project.name.replace(/-/g, ' ')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.private ? 'Repositório Privado' : 'Repositório Público'}
          </Typography>
        </Box>

        {/* Description */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" color="text.primary" gutterBottom>
            {project.description || 'Nenhuma descrição disponível.'}
          </Typography>
        </Box>

        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Linguagens
            </Typography>
            {project.languages.map((lang) => (
              <Box key={lang.language} sx={{ mb: 2 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" color="text.primary">
                    {lang.language}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {lang.percentage}%
                  </Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={parseFloat(lang.percentage)}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'background.default',
                  }}
                />
              </Box>
            ))}
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contribuidores
            </Typography>
            <Stack direction="row" flexWrap="wrap">
              {project.contributors.map((contributor) => (
                <Chip
                  key={contributor.id}
                  avatar={<Avatar src={contributor.avatar_url} />}
                  label={contributor.login}
                  clickable
                  component="a"
                  href={contributor.url}
                  target="_blank"
                  sx={{ m: 0.5 }}
                />
              ))}
            </Stack>
          </Grid2>
        </Grid2>
      </DialogContent>
    </Dialog>
  )
}

const OurProjectsSection = ({ bgColor }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)
  const selectedFeature = projects[selectedItemIndex] || {}

  const [loading] = useState(false)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <UniformSection bgColor={bgColor}>
      <Grid2 container spacing={4}>
        {/* LEFT SECTION */}
        <Grid2 size={{ sm: 12, md: 6 }} component="nav">
          <SectionTitle
            title="Alguns de Nossos Projetos"
            titleSize="h4"
            sx={{ marginBottom: 2 }}
          />
          <Typography
            component="p"
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: { xs: 2, sm: 4 } }}
          >
            Aqui você encontra exemplo de projetos desenvolvidos pela{' '}
            <strong>COMP</strong>. Alguns projetos podem ser aberto, com o
            codigo publicado no github da empresa.
          </Typography>

          {/* MOBILE VIEW - Chips */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            {projects.map(({ name }, index) => (
              <Chip
                key={index}
                label={`Projeto ${index + 1}`}
                onClick={() => setSelectedItemIndex(index)}
                clickable
                color={selectedItemIndex === index ? 'primary' : 'default'}
              />
            ))}
          </Stack>

          {/* MOBILE VIEW - Selected Project */}
          <Card
            variant="outlined"
            sx={{
              display: { xs: 'block', sm: 'none' },
              marginTop: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${selectedFeature.image_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 280,
              }}
            />
            <Box sx={{ padding: 2 }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body1" fontWeight="bold">
                  {formatProjectName(selectedFeature.name)}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {formatDate(selectedFeature.created_at)}
                </Typography>
              </Stack>

              <Typography
                color="primary"
                variant="body2"
                fontWeight="bold"
                onClick={handleOpen}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginTop: 2,
                }}
              >
                Ver projeto completo
                <ChevronRightRoundedIcon fontSize="small" />
              </Typography>
            </Box>
          </Card>

          {/* DESKTOP VIEW - Project List */}
          <Stack
            spacing={2}
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                createdAt={project.created_at}
                language={project.language}
                selected={selectedItemIndex === index}
                onClick={() => setSelectedItemIndex(index)}
              />
            ))}
          </Stack>
        </Grid2>

        {/* RIGHT SECTION - Project Image */}
        <Grid2 size={{ sm: 12, md: 6 }}>
          <Card
            variant="outlined"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              px: 2,
              pt: 2,
            }}
          >
            <Box
              component="img"
              src={selectedFeature.image_url}
              alt={selectedFeature.title}
              sx={{
                width: '100%',
                height: '100%',
                maxHeight: 467,
                objectFit: 'cover',
                borderRadius: 1,
                border: 2,
                borderColor: 'divider',
              }}
            />
            <Box textAlign="center">
              <Button onClick={handleOpen}>Ver Projeto</Button>
            </Box>
          </Card>
        </Grid2>
      </Grid2>
      <ProjectDetails
        open={open}
        handleClose={handleClose}
        loading={loading}
        project={project}
      />
    </UniformSection>
  )
}

export default OurProjectsSection

const project = {
  id: 829664561,
  name: 'bolao-sorte-online-api',
  description: 'No description available',
  url: 'https://github.com/EJ-ICEI-PUC-Minas/bolao-sorte-online-api',
  language: 'Java',
  private: true,
  created_at: '2024-07-16T22:07:31Z',
  contributors: [
    {
      id: 124789617,
      login: 'm4Fagundes',
      url: 'https://api.github.com/users/m4Fagundes',
      avatar_url: 'https://avatars.githubusercontent.com/u/124789617?v=4',
      contributions: 47,
    },
    {
      id: 130864240,
      login: 'thomneuenschwander',
      url: 'https://api.github.com/users/thomneuenschwander',
      avatar_url: 'https://avatars.githubusercontent.com/u/130864240?v=4',
      contributions: 30,
    },
  ],
  languages: [
    {
      language: 'Java',
      percentage: '99.63',
    },
    {
      language: 'Dockerfile',
      percentage: '0.37',
    },
  ],
  image_url:
    'http://localhost:8080/github-project/image/bolao-sorte-online-api',
}
