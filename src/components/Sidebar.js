import { Box } from '@mui/material'
import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Switch from '@mui/material/Switch';

function Sidebar() {
  return (
    <Box  flex={2} pl={8} pt={4} sx={{display:{xs:"none", sm:"block"}}} >

    <Box position="fixed">
        <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
                <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="HomePage" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
                <ListItemIcon>
                <AutoStoriesIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
                <ListItemIcon>
                <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
                <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
            </ListItemButton>
        </ListItem>
    
        <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
                <ListItemIcon>
                <Brightness2Icon />
            </ListItemIcon>
            <Switch  defaultChecked />
            </ListItemButton>
        </ListItem>

        </Box>
    </Box>
  )
}

export default Sidebar