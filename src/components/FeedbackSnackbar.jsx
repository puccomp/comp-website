import React from 'react'
import { Snackbar, Alert, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import WarningIcon from '@mui/icons-material/Warning'

const FeedbackSnackbar = ({ open, severity, message, onClose }) => {
  const icons = {
    success: <CheckCircleIcon fontSize="inherit" />,
    error: <ErrorIcon fontSize="inherit" />,
    warning: <WarningIcon fontSize="inherit" />,
  }

  const icon = icons[severity] || <CheckCircleIcon fontSize="inherit" />

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        severity={severity}
        icon={icon}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default FeedbackSnackbar
