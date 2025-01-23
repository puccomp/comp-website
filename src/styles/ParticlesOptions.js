import { useTheme } from '@mui/material/styles'
import { useMemo } from 'react'

const ParticlesOptions = () => {
  const theme = useTheme()

  return useMemo(
    () => ({
      background: {
        color: {
          value: theme.palette.background.default,
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme.palette.primary.main,
        },
        links: {
          color: theme.palette.secondary.main,
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [
      theme.palette.background.default,
      theme.palette.primary.main,
      theme.palette.secondary.main,
    ]
  )
}

export default ParticlesOptions
