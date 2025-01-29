import { useState } from 'react'
import {
  Box,
  Container,
  Divider,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Tabs,
  Tab,
  useMediaQuery,
  styled,
  useTheme,
} from '@mui/material'

// ICONS
import HomeIcon from '@mui/icons-material/Home'
import ApartmentIcon from '@mui/icons-material/Apartment'

// IMAGES
import puccoreuIMG from '../assets/images/puccoreu.png'
import puclibaIMG from '../assets/images/pucliba.png'

// COMPONENTS
import SectionContainer from '../components/SectionContainer'
import SectionTitle from '../components/SectionTitle'

import { Paragraph } from '../styles/Texts'

const About = () => {
  const locations = [
    {
      id: 1,
      title: 'PUC - Coração Eucarístico',
      address: 'Av. Dom José Gaspar, 500, Prédio 34 | MG, 30535-901',
      image: puccoreuIMG,
      icon: HomeIcon,
      mapUrl:
        'https://www.google.com/maps?q=Av.+Dom+José+Gaspar,+500,+Prédio+34+MG,+30535-901',
    },
    {
      id: 2,
      title: 'PUC - Campus Lourdes',
      address: 'R. Cláudio Manoel, 1162, Prédio 4 | MG, 30140-100',
      image: puclibaIMG,
      icon: ApartmentIcon,
      mapUrl:
        'https://www.google.com/maps?q=R.+Cláudio+Manoel,+1162,+Prédio+4+MG,+30140-100',
    },
  ]

  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  const handleSelectLocation = (location) => {
    setSelectedLocation(location)
  }

  const handleViewMap = () => {
    if (selectedLocation.mapUrl) window.open(selectedLocation.mapUrl, '_blank')
  }

  const [tabValue, setTabValue] = useState(0)

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue)
  }

  const TabContent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
  }))

  const theme = useTheme()

  return (
    <>
      <Container sx={{ paddingY: 5 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <SectionContainer
            title="Quem somos nós ?"
            titleBgColor={theme.palette.background.paper}
          >
            <Paragraph>
              A COMP é uma <strong>Empresa Júnior</strong> formada por
              estudantes de graduação dos cursos do Instituto de Ciências Exatas
              e Informática da PUC Minas. Especializamo-nos no desenvolvimento
              de <strong>softwares sob demanda</strong>, criando soluções
              personalizadas que atendem de forma precisa aos desafios e
              objetivos dos nossos clientes.
            </Paragraph>
          </SectionContainer>

          <SectionContainer
            title="Propósito"
            titleBgColor={theme.palette.background.paper}
          >
            <Paragraph>
              Nosso propósito é oferecer oferecer{' '}
              <strong>soluções de software</strong> de alta qualidade e
              inovação, sempre alinhadas às necessidades exclusivas de cada
              cliente. Além disso, temos como missão contribuir para o
              crescimento pessoal e profissional de nossos membros,
              proporcionando vivências reais de mercado que conectam o rigor
              acadêmico à prática empresarial.
            </Paragraph>
          </SectionContainer>
        </Stack>
      </Container>

      {/* TAB SECTION */}
      <Container>
        <Box
          sx={{
            border: 1,
            borderColor: 'divider',
            borderRadius: 1,
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              marginBottom: 1,
              backgroundColor: theme.palette.background.paper,
              px: 1,
              pt: 1,
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleChangeTab}
              aria-label="tabs example"
            >
              <Tab label="História" />
              <Tab label="Memórias" disabled />
              <Tab label="Valores" disabled />
            </Tabs>
          </Box>
          {tabValue === 0 && (
            <TabContent>
              <Paragraph>
                A COMP nasceu no <strong>dia 3 de março de 2024</strong>,
                inicialmente sob o nome
                <strong> T.F.R.L.</strong>, uma sigla que homenageava os
                fundadores:
                <strong>
                  {' '}
                  Thomas Neuenschwander, Matheus Fagundes, Raphael Arnout e Luca
                  Gonzaga
                </strong>
                , alunos do curso de Ciência da Computação do Instituto de
                Ciências Exatas e Informática (ICEI) da PUC Minas. Esses
                entusiastas uniram suas habilidades e paixão pela tecnologia
                para criar uma iniciativa que fosse além do ambiente acadêmico,
                conectando a teoria aprendida em sala de aula com as demandas
                reais do mercado. Logo após o lançamento, a empresa ganhou o
                nome pelo qual hoje é amplamente conhecida:{' '}
                <strong>COMP</strong>, uma abreviação direta de "computação",
                que reflete a essência da nossa área de atuação e reforça o
                nosso propósito de desenvolver soluções tecnológicas
                personalizadas.
              </Paragraph>
              <Paragraph>
                O primeiro projeto realizado pela COMP foi para{' '}
                <strong>Bárbara Costa</strong>, uma influenciadora fitness em
                ascensão, que desejava uma <strong>Landing Page</strong>{' '}
                atrativa para o lançamento do seu curso intitulado
                <em> "Dia de 26 Horas"</em>. Esse desafio não só marcou a
                estreia da empresa no mercado, como também proporcionou um
                aprendizado prático valioso. Durante o desenvolvimento do
                projeto, a equipe cresceu com a chegada de{' '}
                <strong>Vinicius Goddard</strong>, um talentoso especialista em
                desenvolvimento web e design, também aluno de Ciência da
                Computação da PUC Minas. Sua contribuição foi essencial para o
                sucesso do projeto e para o fortalecimento da equipe.
              </Paragraph>

              <Paragraph>
                Logo após o término do primeiro trabalho, a COMP assumiu um
                desafio ainda mais complexo: o desenvolvimento do software
                chamado <strong>"Bolão Sorte Online"</strong>, uma solução
                inovadora baseada em filtros estatísticos, projetada para
                aumentar as probabilidades de sucesso dos usuários em loterias
                como a <strong>Mega-Sena</strong> e a <strong>Quina</strong>. O
                cliente, um economista entusiasta de loterias, procurava uma
                ferramenta que combinasse análises matemáticas avançadas com
                facilidade de uso, possibilitando a criação de bolões
                estratégicos e personalizados. Esse projeto exigiu um alto nível
                de{' '}
                <strong>conhecimento técnico, inovação e criatividade</strong>,
                desafiando a equipe a explorar conceitos de estatística aplicada
                e design de software robusto.
              </Paragraph>

              <Paragraph>
                Agora, em <strong>2025</strong>, a COMP está pronta para iniciar
                uma nova fase em sua história. Com o objetivo de expandir suas
                operações e promover o engajamento acadêmico, a empresa abrirá
                suas portas para estudantes de todos os cursos do{' '}
                <strong>ICEI</strong>, por meio de um processo seletivo que
                valoriza a diversidade de habilidades e perspectivas. Essa
                iniciativa busca não apenas aumentar a capacidade técnica e
                criativa da equipe, mas também consolidar a COMP como um espaço
                de aprendizado e inovação, unindo excelência acadêmica e prática
                de mercado.
              </Paragraph>
            </TabContent>
          )}

          {tabValue === 1 && (
            <TabContent>
              <Paragraph>
                Conteúdo da aba "Memórias". Aqui podem estar as memórias da
                equipe ou momentos importantes.
              </Paragraph>
            </TabContent>
          )}
          {tabValue === 2 && (
            <TabContent>
              <Paragraph>
                Conteúdo da aba "Valores". Insira os valores ou missões da
                equipe ou da empresa.
              </Paragraph>
            </TabContent>
          )}
        </Box>
      </Container>
      {/* LOCATION SECTION */}
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 4 }}
          sx={{
            my: 4,
            py: 4,
            px: { xs: 2, md: 4 },
            backgroundColor: theme.palette.background.paper,
            borderRadius: 1,
            border: 1,
            borderColor: 'divider',
          }}
        >
          {isMobile ? (
            <>
              <SectionTitle title="Onde Fica ?" />
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                {locations.map((location) => (
                  <Box
                    key={location.id}
                    onClick={() => handleSelectLocation(location)}
                    sx={{
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: 'all 0.2s ease-in-out',
                      color:
                        location.id === selectedLocation.id
                          ? 'primary.main'
                          : 'inherit',
                      '&:hover': {
                        color: 'primary.dark',
                      },
                    }}
                  >
                    <location.icon fontSize="large" />
                  </Box>
                ))}
              </Box>
            </>
          ) : (
            <Stack
              spacing={2}
              sx={{
                width: { xs: '100%', md: '80%' },
              }}
            >
              <Box>
                <SectionTitle title="Onde Fica ?" />
                <Divider sx={{ py: 1 }} />
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ my: 1.5 }}
                >
                  Nossos espaços estão localizados nas unidades da Pontifícia
                  Universidade Católica de Minas Gerais, em Belo Horizonte.
                </Typography>
              </Box>
              {locations.map((location) => (
                <Card
                  key={location.id}
                  onClick={() => handleSelectLocation(location)}
                  sx={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    backgroundColor:
                      location.id === selectedLocation.id
                        ? 'primary.dark'
                        : 'inherit',
                    transition: 'all 0.2s ease-in-out',
                    color:
                      location.id === selectedLocation.id ? '#fff' : 'inherit',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: '#fff',
                    },
                    border:
                      location.id === selectedLocation.id
                        ? `1px solid ${theme.palette.primary.main}`
                        : `1px solid '${theme.palette.divider}'`,

                    borderRadius: theme.shape.borderRadius,
                    padding: theme.spacing(0.2),
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      pl: 2,
                    }}
                  >
                    <location.icon fontSize="large" />
                  </Box>

                  <Divider orientation="vertical" flexItem />

                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{location.title}</Typography>
                    <Typography variant="body2">{location.address}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          )}

          <Box
            sx={{
              width: { xs: '100%', md: '65%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              mt: { xs: 2, md: 0 },
              backgroundColor: 'secundary.main',
              px: 2,
              py: 1,
              borderRadius: 1,
              boxShadow: 3,
            }}
          >
            <Typography variant="h6">{selectedLocation.title}</Typography>
            <Box
              component="img"
              src={selectedLocation.image}
              alt={selectedLocation.title}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: 400,
                objectFit: 'cover',
                borderRadius: 1,
                border: 2,
                borderColor: 'divider',
              }}
            />
            <Button variant="outlined" size="small" onClick={handleViewMap}>
              Ver no Mapa
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default About
