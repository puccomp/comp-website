import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  Typography,
  IconButton,
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Divider,
} from '@mui/material'
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material'
import MemberAvatar from '../MemberAvatar'
import { formatDateTextual } from '../../utils/dateUtils'

const MemberCard = ({
  id,
  name,
  surname,
  role,
  avatarUrl,
  bio,
  course,
  entryDate,
  exitDate,
  isActive,
  instagramUrl,
  githubUrl,
  linkedinUrl,
}) => {
  const [open, setOpen] = useState(false)
  const [isAvatarError, setIsAvatarError] = useState(false)

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
            <MemberAvatar
              avatarUrl={!isAvatarError ? avatarUrl : undefined}
              name={name}
              surname={surname}
              sx={{ border: 1, borderColor: 'divider' }}
              onError={() => setIsAvatarError(true)}
            />
          }
          title={`${name} ${surname}`}
          subheader={role}
        />
      </Card>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <>
          <DialogContent dividers>
            <DialogContentText component="div">
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <MemberAvatar
                  avatarUrl={!isAvatarError ? avatarUrl : undefined}
                  name={name}
                  surname={surname}
                  size={80}
                  sx={{ border: 1, borderColor: 'black', margin: '0 auto' }}
                  onError={() => setIsAvatarError(true)}
                />
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
                  {isActive
                    ? formatDateTextual(entryDate)
                    : formatDateTextual(exitDate)}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
            </DialogContentText>

            <Typography color="text.secondary">"{bio}"</Typography>
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
      </Dialog>
    </>
  )
}

export default MemberCard
