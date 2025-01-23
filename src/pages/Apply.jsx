import {
  Box,
  Container,
  Typography,
  Alert,
  Grid,
  Divider,
  useTheme,
} from '@mui/material'

import Grid2 from '@mui/material/Grid2'

import CVForm from '../components/forms/CVForm'
import SectionTitle from '../components/SectionTitle'

import bgImage from '../assets/images/bgCOMP_01.jpg'

import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import BuildIcon from '@mui/icons-material/Build'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'

const benefits = [
  {
    icon: <WorkIcon color="primary" />,
    text: 'Experiência Prática em Projetos Reais',
  },
  { icon: <SchoolIcon color="primary" />, text: 'Destaque para Currículo' },
  {
    icon: <BuildIcon color="primary" />,
    text: 'Desenvolvimento de Habilidades Técnicas',
  },
  {
    icon: <BusinessCenterIcon color="primary" />,
    text: 'Gestão e Empreendedorismo',
  },
]

const Apply = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        padding: {
          xs: '20px',
          md: '24px',
          lg: '32px',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2,
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: theme.shape.borderRadius,
        }}
      >
        <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid item xs={12} md={7}>
            <Box sx={{ py: 2 }}>
              <SectionTitle title="Venha Fazer parte da comp!" titleSize="h3" />
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" paragraph>
                Estamos em busca de estudantes talentosos que queiram crescer
                profissionalmente, trabalhando em projetos reais e desenvolvendo
                suas habilidades em equipe.
              </Typography>

              <Typography variant="body1" paragraph>
                Aqui você terá a oportunidade de colocar em prática todo o seu
                conhecimento acadêmico e aprender ainda mais. É a chance de
                desenvolver habilidades técnicas e comportamentais em um
                ambiente de constante evolução!
              </Typography>

              <Alert severity="info" sx={{ mt: 2, fontSize: 'h6' }}>
                Ah, importante! A comunicação com os selecionados será
                <strong> por WhatsApp</strong>, então atenção na hora de
                preencher seus dados.
              </Alert>
            </Box>
            <Box sx={{ py: 2 }}>
              <SectionTitle title="Benefícios de Entrar na COMP" />
              <Divider sx={{ my: 1.5 }} />

              <Grid2 container spacing={2}>
                {benefits.map((benefit, index) => (
                  <Grid2
                    size={{ xs: 12, md: 6 }}
                    key={index}
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    {benefit.icon}
                    <Typography variant="body2">{benefit.text}</Typography>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <CVForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Apply
