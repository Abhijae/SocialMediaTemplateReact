import React, { useState } from 'react'
import { AppBar, styled, Typography } from "@mui/material"
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/NotificationAdd';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const StyledToolBar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
  }));

const Icons = styled(Box)(({ theme }) => ({
    display:"none",
    
    color:"white",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
    
  }));

const UserBox = styled(Box)(({ theme }) => ({
    
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
    
  }));

function Navbar() {
  
  const [open, setopen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  
 
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <AppBar >
        <StyledToolBar>
            <Typography variant='h6' sx={{ display: {xs:"none",sm:"block"}}}>Travelog</Typography>
            <AcUnitIcon sx={{ display: { xs:"block",sm:"none"} }}/>
            <Search><InputBase placeholder='Search...'/></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                <MailIcon color="action" />
                </Badge>
                <Badge badgeContent={4} color="error">
                <Notifications color="action" />
                </Badge>
                <Avatar sx={{width:30,height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" 
                onClick={(e) => setopen(true)}
                />
            </Icons>

            <UserBox onClick={(e) => setopen(true)}>
                <Avatar sx={{width:30,height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" 
                    
                />
                <Typography variant="span">John</Typography>

            </UserBox>
            
        </StyledToolBar>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={e=>setopen(false)}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: -55,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
        
    </AppBar>
  )
}

export default Navbar