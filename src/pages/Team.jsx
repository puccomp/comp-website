import React from 'react'
import {
  Backdrop,
  CircularProgress,
  Container,
  Typography,
  Box,
  Grid2,
} from '@mui/material'
import MemberCard from '../components/cards/MemberCard'
import SectionContainer from '../components/SectionContainer'
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
            spacing={{ xs: 1, sm: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            minHeight={56}
            container
          >
            {teamMembers.map((member) => (
              <Grid2 key={member.id} size={4}>
                <MemberCard
                  id={member.id}
                  name={member.name}
                  surname={member.surname}
                  role={member.role}
                  avatarUrl={member.avatar_url}
                  bio={member.bio}
                  course={member.course}
                  entryDate={member.entry_date}
                  exitDate={member.exit_date}
                  isActive={member.is_active}
                  instagramUrl={member.instagram_url}
                  githubUrl={member.github_url}
                  linkedinUrl={member.linkedin_url}
                />
              </Grid2>
            ))}
          </Grid2>
        </SectionContainer>
        <Box sx={{ my: 3 }} />
        <SectionContainer title="Mentores">
          <Grid2
            spacing={{ xs: 1, sm: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            minHeight={56}
            container
          >
            {mentors.map((member) => (
              <Grid2 key={member.id} size={4}>
                <MemberCard
                  id={member.id}
                  name={member.name}
                  surname={member.surname}
                  role={member.role}
                  avatarUrl={member.avatar_url}
                  bio={member.bio}
                  course={member.course}
                  entryDate={member.entry_date}
                  exitDate={member.exit_date}
                  isActive={member.is_active}
                  instagramUrl={member.instagram_url}
                  githubUrl={member.github_url}
                  linkedinUrl={member.linkedin_url}
                />
              </Grid2>
            ))}
          </Grid2>
        </SectionContainer>
        <Box sx={{ my: 3 }} />
        <SectionContainer title="Membros Antigos">
          <Grid2
            spacing={{ xs: 1, sm: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            minHeight={56}
            container
          >
            {oldMembers.map((member) => (
              <Grid2 key={member.id} size={4}>
                <MemberCard
                  id={member.id}
                  name={member.name}
                  surname={member.surname}
                  role={member.role}
                  avatarUrl={member.avatar_url}
                  bio={member.bio}
                  course={member.course}
                  entryDate={member.entry_date}
                  exitDate={member.exit_date}
                  isActive={member.is_active}
                  instagramUrl={member.instagram_url}
                  githubUrl={member.github_url}
                  linkedinUrl={member.linkedin_url}
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
