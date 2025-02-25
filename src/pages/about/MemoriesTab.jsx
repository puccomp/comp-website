import React from 'react'
import { ImageList } from '@mui/material'
import TabContent from '../../components/TabContent'
import MemoryImageCard from '../../components/cards/MemoryImageCard'

const MemoriesTab = ({ value, index, memories, breakpoints }) => {
  const { isXs, isSm } = breakpoints
  const cols = isXs ? 1 : isSm ? 2 : 4

  return (
    <TabContent value={value} index={index}>
      <ImageList
        variant="standard"
        sx={{ height: 585, margin: 0 }}
        cols={cols}
        rowHeight={300}
      >
        {memories?.map((memory, idx) => (
          <MemoryImageCard
            key={idx}
            imageUrl={memory.image_url}
            title={memory.title}
            date={memory.date}
            description={memory.description}
          />
        ))}
      </ImageList>
    </TabContent>
  )
}

export default MemoriesTab
