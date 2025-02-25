import { useState } from 'react'
import {
  Box,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
  Tooltip,
  Typography,
} from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { formatDateNumeric } from '../../utils/dateUtils'

const MemoryImageCard = ({ imageUrl, title, date, description }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <ImageListItem sx={{ border: 1, borderColor: 'divider' }}>
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        {!loaded && (
          <Skeleton variant="rectangular" width="100%" height="100%" />
        )}
        <img
          src={imageUrl}
          alt={title}
          style={{
            display: loaded ? 'block' : 'none',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      </Box>

      {(title || date) && (
        <ImageListItemBar
          title={title}
          subtitle={
            date && (
              <Typography color="text.secondary" fontSize="small">
                {formatDateNumeric(date)}
              </Typography>
            )
          }
          actionIcon={
            description && (
              <Tooltip title={description}>
                <IconButton sx={{ color: 'text.secondary' }}>
                  <HelpOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )
          }
        />
      )}
    </ImageListItem>
  )
}

export default MemoryImageCard
