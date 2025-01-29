import { Avatar, Tooltip } from '@mui/material'

const TechnologyIcon = ({ technology }) => {
  return (
    <Tooltip title={technology.name} placement="top" arrow>
      <Avatar
        src={technology.icon_url}
        alt={technology.name}
        variant="rounded"
        sx={{ m: 0.5 }}
      />
    </Tooltip>
  )
}

export default TechnologyIcon
