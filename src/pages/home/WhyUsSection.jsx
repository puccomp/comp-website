import React, { useState } from 'react'
import {
  Box,
  Typography,
  Container,
  Grid2,
  useMediaQuery,
  Modal,
} from '@mui/material'

import SectionTitle from '../../components/SectionTitle'

// ICONS
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import VerifiedIcon from '@mui/icons-material/Verified'
import GroupIcon from '@mui/icons-material/Group'
import OCompLogo from '../../assets/svg/O_comp.svg'
import compLogo from '../../assets/images/comp_logo.png'
import UniformSection from '../../components/UniformSection'

const values = [
  {
    icon: <LightbulbIcon sx={{ fontSize: 48 }} />,
    title: 'Inovação',
    description:
      'Na COMP, desenvolvemos soluções tecnológicas de ponta com um design de qualidade, sempre baseados em conhecimento validado.',
    gradientColors: ['#7B61FF', '#4A90E2'],
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 48 }} />,
    title: 'Excelência',
    description:
      'Trabalhamos com dedicação para oferecer soluções que atendem às expectativas de nossos clientes e garantem qualidade em todas as entregas.',
    gradientColors: ['#FF6B6B', '#FFD93D'],
  },
  {
    icon: <GroupIcon sx={{ fontSize: 48 }} />,
    title: 'Colaboração',
    description:
      'Acreditamos que o trabalho em equipe é essencial para alcançar resultados extraordinários e gerar impacto positivo.',
    gradientColors: ['#42E695', '#3BB2B8'],
  },
]

const ValueCard = ({
  icon,
  title,
  description,
  gradientColors = ['#7B61FF', '#4A90E2'],
}) => {
  return (
    <Box
      sx={{
        borderRadius: 8,
        overflow: 'hidden',
        minHeight: 320,
        display: 'flex',
        flexDirection: 'column',
        border: 1,
        borderColor: 'divider',
      }}
    >
      <Box
        sx={{
          height: '40%',
          minHeight: 130,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]})`,
        }}
      >
        {icon}
      </Box>
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

const ValueCircle = ({ value, position, iconColor, iconFontSize = 32 }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          position: 'absolute',
          top: position.top || '50%',
          left: position.left || '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            backgroundColor: 'background.paper',
            border: 1,
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 1,
          }}
        >
          {value.icon &&
            React.cloneElement(value.icon, {
              sx: { fontSize: iconFontSize, color: iconColor },
            })}
        </Box>
        <Box
          sx={{
            backgroundColor: 'background.paper',
            px: 2,
            py: 0.5,
            borderRadius: 4,
            boxShadow: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {value.title}
          </Typography>
        </Box>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            bgcolor: 'background.paper',
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            {value.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {value.description}
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

const DesktopValues = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 500,
      }}
    >
      <Grid2
        container
        spacing={4}
        sx={{
          position: 'relative',
          zIndex: -1,
        }}
      >
        {values.map((value, index) => (
          <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <ValueCard
              icon={value.icon}
              title={value.title}
              description={value.description}
              gradientColors={value.gradientColors}
            />
          </Grid2>
        ))}
      </Grid2>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7B61FF" />
            <stop offset="100%" stopColor="#4A90E2" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#FFD93D" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#42E695" />
            <stop offset="100%" stopColor="#3BB2B8" />
          </linearGradient>
        </defs>

        <path
          d="M 240,320 C 240,380 720,380 720,400"
          stroke="url(#lineGradient1)"
          strokeWidth="5"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="2s"
            fill="freeze"
            begin="0s"
          />
        </path>

        <path
          d="M 700,320 C 700,320 720,380 700,400"
          stroke="url(#lineGradient2)"
          strokeWidth="5"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="5s"
            fill="freeze"
            begin="0.5s"
          />
        </path>

        <path
          d="M 1200,320 C 1200,380 720,380 720,400"
          stroke="url(#lineGradient3)"
          strokeWidth="5"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="2s"
            fill="freeze"
            begin="0.6s"
          />
        </path>
      </svg>

      {/* LOGO */}
      <Box
        component="img"
        src={compLogo}
        alt="Logo da COMP"
        sx={{
          position: 'absolute',
          top: '400px',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          width: { xs: '100px', sm: '200px' },
          border: 1,
          borderColor: 'divider',
          borderRadius: 8,
          p: 1,
          backgroundColor: 'background.paper',
          zIndex: 0,
        }}
      />
    </Box>
  )
}

const MobileValues = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* LOGO O COMP */}
      <Box
        component="img"
        src={OCompLogo}
        alt="Logo da COMP"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 60,
          height: 60,
          borderRadius: '50%',
          border: 1,
          borderColor: 'background.navs',
          backgroundColor: 'background.paper',
          zIndex: 1,
        }}
      />

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7B61FF" />
            <stop offset="100%" stopColor="#4A90E2" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#FFD93D" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#42E695" />
            <stop offset="100%" stopColor="#3BB2B8" />
          </linearGradient>
        </defs>
        {/* LINE 1: (TOP) */}
        <path
          d="M 721,75 C 725,200 720,200 720,250"
          stroke="url(#lineGradient1)"
          strokeWidth="5"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="1s"
            fill="freeze"
            begin="0.9s"
          />
        </path>

        {/* LINE 2: (ESQ INF) */}
        <path
          d="M 360,375 C 540,350 720,300 720,250"
          stroke="url(#lineGradient2)"
          strokeWidth="5"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="2s"
            fill="freeze"
            begin="0.5s"
          />
        </path>

        {/* LINE 3: (DIR INF) */}
        <path
          d="M 1080,375 C 900,350 720,300 720,250"
          stroke="url(#lineGradient3)"
          strokeWidth="5"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="2s"
            fill="freeze"
            begin="0.6s"
          />
        </path>
      </svg>

      <ValueCircle
        value={values[0]}
        position={{ top: '15%', left: '50%' }}
        iconColor="#7B61FF"
      />

      <ValueCircle
        value={values[1]}
        position={{ top: '75%', left: '25%' }}
        iconColor="#FF6B6B"
      />

      <ValueCircle
        value={values[2]}
        position={{ top: '75%', left: '75%' }}
        iconColor="#42E695"
      />
    </Box>
  )
}

const WhyUsSection = ({ bgcolor }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('lg'))
  return (
    <UniformSection bgColor={bgcolor}>
      <Box sx={{ textAlign: 'left', mb: 2 }}>
        <SectionTitle title="Porque Trabalhar conosco?" titleSize="h4" />
        <Typography
          variant="subtitle2"
          sx={{
            pt: 2,
            pb: 4,
            color: 'text.secondary',
          }}
        >
          Na COMP, oferecemos soluções tecnológicas que fazem a diferença. Nosso
          time é movido por inovação, excelência e colaboração, entregando valor
          real aos clientes. Priorizamos transparência, compromisso com
          resultados e relações de confiança. Escolher a COMP é garantir
          parceria, eficiência e qualidade para superar expectativas e levar
          você ao próximo nível.
        </Typography>
      </Box>
      {isMobile ? <MobileValues /> : <DesktopValues />}
    </UniformSection>
  )
}

export default WhyUsSection
