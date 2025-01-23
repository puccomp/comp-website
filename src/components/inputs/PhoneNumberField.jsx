import React from 'react'
import TextField from '@mui/material/TextField'

const PhoneNumberField = ({
  label = 'Número de telefone',
  value = '',
  onChange,
  ...props
}) => {
  const handleKeyDown = (e) => {
    const allowedKeys = [
      'Backspace',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
      'Tab',
      'Home',
      'End',
      'Enter',
    ]

    if (!allowedKeys.includes(e.key) && !/^\d$/.test(e.key)) e.preventDefault()
  }

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, '')

    let formattedValue = rawValue

    if (rawValue.length > 2)
      formattedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2)}`

    if (rawValue.length > 7)
      formattedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(7, 11)}`

    if (onChange) onChange(e, rawValue)
  }

  const formatValue = (val) => {
    const rawValue = val.replace(/\D/g, '')
    let formattedValue = rawValue

    if (rawValue.length > 2)
      formattedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2)}`

    if (rawValue.length > 7)
      formattedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(7, 11)}`

    return formattedValue
  }

  return (
    <TextField
      {...props}
      type="tel"
      label={label}
      value={formatValue(value)}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      fullWidth
      variant="outlined"
    />
  )
}

export default PhoneNumberField
