import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon,EmojiEmotions, VideoCameraBack} from "@mui/icons-material"
import styled from '@emotion/styled'
import ImageIcon from '@mui/icons-material/Image';
import CloseIcon from '@mui/icons-material/Close';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
   
})



function Add() {

    const [open, setOpen] = useState(false)

  

  return (
    <>
        
        <Tooltip 
            title="Delete" 
            sx={{position:"fixed",bottom:20 , left:{xs:"calc(50% - 25px) " , md:30}}} 
            onClick={e=>setOpen(true)}
            
        >

            
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        
        <StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
           
            <Stack direction="row"  spacing={1} justifyContent="space-between">
                <Box></Box>
                
                <Box><CloseIcon onClick={e=>setOpen(false)}/></Box>
            </Stack>
            
            <UserBox>
                <Avatar sx={{ width: 30 , height:30}}/>
                <Typography variant='h7' ml={1} color="gray" textAlign="center" fontWeight={500}>John Doe</Typography>
            </UserBox>
            <TextField
                sx={{width:"100%"}}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="Whats on Your mind?"
                variant="standard"
            />
            
            <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotions color="primary"/>
                   
                <ImageIcon color="primary" />
                <VideoCameraBack color="primary"/>
               
            </Stack>
            <ButtonGroup
                fullWidth
                variant='contained'
                aria-label="Outlined primary button group"
            >
                <Button>Post</Button>
                
            </ButtonGroup>
        </Box>
        </StyledModal>
    </>
  )
}

export default Add