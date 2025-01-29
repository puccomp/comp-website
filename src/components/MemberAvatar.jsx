import React, { useState } from 'react'
import { Avatar, Skeleton } from '@mui/material'

const MemberAvatar = ({
  avatarUrl,
  name,
  surname,
  size = 40,
  variant = 'circular',
  onError,
  sx = {},
}) => {
  const getInitials = () => {
    const initialName = name?.[0]?.toUpperCase() || ''
    const initialSurname = surname?.[0]?.toUpperCase() || ''
    return `${initialName}${initialSurname}`
  }

  return (
    <Avatar
      src={avatarUrl}
      alt={`${name} ${surname}`}
      variant={variant}
      sx={{ width: size, height: size, ...sx }}
      slotProps={{
        img: {
          onError: () => {
            console.log('Failed to load member avatar image: ' + avatarUrl)
            if (onError) onError()
          },
          referrerPolicy: 'no-referrer',
        },
      }}
    >
      {getInitials()}
    </Avatar>
  )
}

export default MemberAvatar
