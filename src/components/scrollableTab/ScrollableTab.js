import './ScrollableTab.scss'
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { ButtonBase } from '@mui/material'
import { type } from '@testing-library/user-event/dist/type'

export default function ScrollableTab() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const characterTypes = [
    { id: 1, type: 'Featured' },
    { id: 2, type: 'Discover' },
    { id: 3, type: 'Helpers' },
    { id: 4, type: 'Games' },
    { id: 5, type: 'Image Generating' },
    { id: 6, type: 'VTuber' },
    { id: 7, type: 'Game Characters' },
    { id: 8, type: 'Anime' },
    { id: 9, type: 'Language Learning' },
    { id: 10, type: 'Discussion' },
    { id: 11, type: 'Religion' },
    { id: 12, type: 'Anime Game Characters' },
    { id: 13, type: 'Animals' },
    { id: 14, type: 'Comedy' },
    { id: 15, type: 'Philosophy' },
    { id: 16, type: 'Politics' },
    { id: 17, type: 'Books' },
    { id: 18, type: 'History' },
  ]

  return (
    <Box sx={{ width: '100%', color: 'white' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {characterTypes.map((characterType) => (
          <Tab
            key={characterType.id}
            label={
              <span style={{ color: 'white', textTransform: 'none' }}>
                {characterType.type}
              </span>
            }
          />
        ))}
      </Tabs>
    </Box>
  )
}
