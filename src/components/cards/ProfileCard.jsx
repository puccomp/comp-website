import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  IconButton,
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Divider,
  CircularProgress,
} from '@mui/material'

// ICONS
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material'

const ProfileCard = ({
  id,
  name,
  surname,
  role,
  imageProfile,
  course,
  description,
  instagramUrl,
  githubUrl,
  linkedinUrl,
  date,
  isActive,
}) => {
  const [loading] = useState(false)
  const [open, setOpen] = useState(false)

  const getInitials = () => {
    const initialName = name?.[0]?.toUpperCase() || ''
    const initialSurname = surname?.[0]?.toUpperCase() || ''
    return `${initialName}${initialSurname}`
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Card
        sx={{
          maxWidth: 400,
          cursor: 'pointer',
          transition: 'transform 0.2s, boxShadow 0.2s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 6,
          },
          bgcolor: 'transparent',
        }}
        onClick={handleOpen}
        variant="outlined"
      >
        <CardHeader
          avatar={
            imageProfile ? (
              <Avatar src={imageProfile} alt={`${name} ${surname}`} />
            ) : (
              <Avatar>{getInitials()}</Avatar>
            )
          }
          title={`${name} ${surname}`}
          subheader={role}
        />
      </Card>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <DialogContent dividers>
              <DialogContentText component="div">
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  {imageProfile ? (
                    <Avatar
                      src={imageProfile}
                      alt={`${name} ${surname}`}
                      sx={{ width: 80, height: 80, margin: '0 auto' }}
                    />
                  ) : (
                    <Avatar sx={{ width: 80, height: 80, margin: '0 auto' }}>
                      {getInitials()}
                    </Avatar>
                  )}
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    <strong>
                      {name} {surname}
                    </strong>
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />

                <Box
                  component="section"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  }}
                >
                  <Typography variant="subtitle2">
                    <strong>Cargo:</strong> {role}
                  </Typography>
                  <Typography variant="subtitle2">
                    <strong>Curso:</strong> {course}
                  </Typography>
                  <Typography variant="subtitle2">
                    <strong>
                      {isActive ? 'Data de ingresso:' : 'Data de saída:'}
                    </strong>{' '}
                    {date}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
              </DialogContentText>
              <Typography color="text.secondary">{description}</Typography>
            </DialogContent>

            <DialogActions sx={{ justifyContent: 'space-between' }}>
              <Box>
                {instagramUrl && (
                  <IconButton
                    component="a"
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram />
                  </IconButton>
                )}
                {githubUrl && (
                  <IconButton
                    component="a"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GitHub />
                  </IconButton>
                )}
                {linkedinUrl && (
                  <IconButton
                    component="a"
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedIn />
                  </IconButton>
                )}
              </Box>
              <Button onClick={handleClose} variant="contained" size="small">
                Fechar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  )
}

export default ProfileCard
