import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'

// COMPONENTS
import SectionTitle from '../../components/SectionTitle'

// ICONS
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import UniformSection from '../../components/UniformSection'

const FAQSection = () => {
  return (
    <UniformSection>
      <Box sx={{ flex: 2 }}>
        <SectionTitle
          title="Perguntas Frequentes"
          titleSize="h4"
          barHeightMultiplier={2}
          sx={{ pb: 3 }}
        />

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq1-content"
            id="faq1-header"
          >
            <Typography variant="h6">
              O que é uma <strong>empresa júnior</strong>?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              As empresas juniores são organizações{' '}
              <strong>sem fins lucrativos </strong>
              geridas por estudantes universitários. Elas oferecem serviços e
              projetos para o mercado, permitindo que os alunos apliquem na
              prática os conhecimentos adquiridos em sala de aula.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq2-content"
            id="faq2-header"
          >
            <Typography variant="h6">
              Como posso contratar os serviços da <strong>COMP</strong>?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para contratar nossos serviços, basta entrar em contato conosco
              através do nosso formulário no site ou por meio das redes sociais.
              Após a solicitação, faremos uma análise do seu projeto e
              entraremos em contato para discutir os detalhes e oferecer uma
              solução personalizada.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq3-content"
            id="faq3-header"
          >
            <Typography variant="h6">
              Quanto tempo leva para desenvolver um projeto?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              O tempo de desenvolvimento de um projeto depende da complexidade e
              das funcionalidades solicitadas. Após a análise inicial, a COMP
              fornecerá um cronograma detalhado para garantir que o projeto seja
              concluído dentro do prazo estabelecido.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq4-content"
            id="faq4-header"
          >
            <Typography variant="h6">
              Quais são os <strong>benefícios</strong> de contratar um empresa
              júnior?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Contratar uma Empresa Júnior como a COMP traz uma série de
              benefícios, incluindo acesso a soluções tecnológicas de qualidade
              a um custo competitivo. Além disso, essa parceria possibilita
              colaborar com estudantes altamente capacitados, ao mesmo tempo em
              que contribui para o desenvolvimento profissional dos membros da
              equipe.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </UniformSection>
  )
}

export default FAQSection
