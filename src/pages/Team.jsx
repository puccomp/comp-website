import React from 'react'
import {
  Backdrop,
  CircularProgress,
  Container,
  Typography,
  Box,
  Grid2,
} from '@mui/material'
import ProfileCard from '../components/cards/ProfileCard.jsx'
import SectionContainer from '../components/SectionContainer.jsx'
import { useMembers } from '../contexts/MembersContext'

const Team = () => {
  const { mentors, oldMembers, teamMembers, loading, error } = useMembers()

  if (error) console.log(error)

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Container sx={{ padding: '32px' }}>
        <Typography variant="h3" align="center">
          Conheça o Nosso Time
        </Typography>
        <Typography variant="body2" align="center" sx={{ pt: 1, pb: 3 }}>
          Nossa equipe é formada por alunos de graduação dos cursos do{' '}
          <strong>
            Instituto de Ciências Exatas e Informática da PUC Minas
          </strong>
          .
        </Typography>
        <SectionContainer title="Equipe">
          <Grid2
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            container
          >
            {teamMembers.map((member) => (
              <Grid2 key={member.id} size={4}>
                <ProfileCard
                  id={member.id}
                  name={member.name}
                  surname={member.surname}
                  role={member.role}
                  imageProfile={member.imageProfile}
                  course={member.course}
                  description={member.description}
                  instagramUrl={member.instagramUrl}
                  githubUrl={member.githubUrl}
                  linkedinUrl={member.linkedinUrl}
                  date={member.date}
                  isActive={member.isActive}
                />
              </Grid2>
            ))}
          </Grid2>
        </SectionContainer>
        <Box sx={{ my: 3 }} />
        <SectionContainer title="Mentores">
          <Grid2
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            container
          >
            {mentors.map((member) => (
              <Grid2 key={member.id} size={4}>
                <ProfileCard
                  id={member.id}
                  name={member.name}
                  surname={member.surname}
                  role={member.role}
                  imageProfile={member.imageProfile}
                  course={member.course}
                  description={member.description}
                  instagramUrl={member.instagramUrl}
                  githubUrl={member.githubUrl}
                  linkedinUrl={member.linkedinUrl}
                  date={member.date}
                  isActive={member.isActive}
                />
              </Grid2>
            ))}
          </Grid2>
        </SectionContainer>
        <Box sx={{ my: 3 }} />
        <SectionContainer title="Membros Antigos">
          <Grid2
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            container
          >
            {oldMembers.map((member) => (
              <Grid2 key={member.id} size={4}>
                <ProfileCard
                  id={member.id}
                  name={member.name}
                  surname={member.surname}
                  role={member.role}
                  imageProfile={member.imageProfile}
                  course={member.course}
                  description={member.description}
                  instagramUrl={member.instagramUrl}
                  githubUrl={member.githubUrl}
                  linkedinUrl={member.linkedinUrl}
                  date={member.date}
                  isActive={member.isActive}
                />
              </Grid2>
            ))}
          </Grid2>
        </SectionContainer>
      </Container>
    </>
  )
}

export default Team
