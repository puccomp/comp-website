import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const theme = useTheme()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleNavigate = (path) => {
    navigate(path)
    handleClose()
  }

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  }

  const activeStyle = {
    fontWeight: 'bold',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }

  const links = ['/sobre', '/equipe', '/torna-se-parte', '/desenvolva']

  return (
    <AppBar sx={{ zIndex: 10 }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: theme.palette.background.navs,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        {/* LOGO */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.04)',
            },
          }}
          onClick={() => handleNavigate('/')}
        >
          <img
            src="/full-logo.svg"
            alt="Logo"
            style={{
              height: 'auto',
              width: '120px',
            }}
          />
        </Box>

        {/* LINKS */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 1,
            alignItems: 'center',
          }}
        >
          {links.map((path, index) => (
            <React.Fragment key={index}>
              <Button
                component={NavLink}
                to={path}
                style={({ isActive }) =>
                  isActive ? { ...linkStyle, ...activeStyle } : linkStyle
                }
                color={path === '/desenvolva' ? 'primary' : 'inherit'}
                variant={path === '/desenvolva' ? 'contained' : 'text'}
              >
                {path === '/sobre' && 'Sobre'}
                {path === '/equipe' && 'Equipe'}
                {path === '/torna-se-parte' && 'Torna-se Parte'}
                {path === '/desenvolva' && 'Desenvolva'}
              </Button>
              {index < links.length - 1 && (
                <Typography
                  sx={{
                    mx: 1,
                    color: theme.palette.text.secondary,
                  }}
                >
                  •
                </Typography>
              )}
            </React.Fragment>
          ))}
        </Box>

        {/* MENU HAMBURGER */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* MENU MOBILE */}
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} keepMounted>
          {links.map((path, index) => (
            <MenuItem
              key={index}
              onClick={() => handleNavigate(path)}
              sx={{
                fontWeight: 'bold',
                ...(path === window.location.pathname && {
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                }),
              }}
            >
              {path === '/sobre' && 'Sobre'}
              {path === '/equipe' && 'Equipe'}
              {path === '/torna-se-parte' && 'Torna-se Parte'}
              {path === '/desenvolva' && 'Desenvolva'}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
