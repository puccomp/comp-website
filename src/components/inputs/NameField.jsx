import React from 'react'
import { TextField } from '@mui/material'

const NameField = ({
  label = 'Nome completo',
  errorText = 'O nome deve conter apenas letras e espaços.',
  value,
  onChange,
  ...props
}) => {
  const handleChange = (e) => {
    const newValue = e.target.value
    const isValid = /^[a-zA-ZÀ-ſ\s]*$/.test(newValue)
    onChange(e, isValid)
  }

  return (
    <TextField
      {...props}
      fullWidth
      label={label}
      variant="outlined"
      value={value}
      onChange={handleChange}
      error={!/^[a-zA-ZÀ-ſ\s]*$/.test(value)}
      helperText={!/^[a-zA-ZÀ-ſ\s]*$/.test(value) ? errorText : ''}
    />
  )
}

export default NameField
