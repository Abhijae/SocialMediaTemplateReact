import React from 'react'
import { Box } from '@mui/material'
import Post from './Post'




function Feed() {

  

  return (
    <Box bgcolor="grey" flex={4} p={2}>
        <Post/>
        <br></br>
        <Post/>
    </Box>
  )
}

export default Feed