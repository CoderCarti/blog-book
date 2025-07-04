import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Switch
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../Theme/ThemeContext'; // Adjust the import path as necessary

const Navigationbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { darkMode, toggleDarkMode } = useTheme(); // Now this will work

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const HandleSearch = () => {
    alert('Search Clicked!');
  };

  return (
    <div>
      <AppBar 
        position="sticky" 
        sx={{ 
          bgcolor: 'background.paper', 
          color: 'text.primary', 
          boxShadow: 'none', 
          borderBottom: theme => `1px solid ${theme.palette.divider}` 
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            BlogSocial
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 30 }}>
            <TextField
              size="small"
              placeholder="Search..."
              variant="outlined"
              sx={{ mr: 2, width: 300 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <i className="fas fa-search" />
                  </InputAdornment>
                ),
              }}
            />
            <SearchIcon
              onClick={HandleSearch}
              sx={{ 
                '&:hover': { 
                  color: 'primary.main', 
                  cursor: 'pointer',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s ease'
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Avatar
              alt="User Avatar"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              sx={{ 
                width: 40, 
                height: 40, 
                ml: 2, 
                mr: 2, 
                cursor: 'pointer', 
                '&:hover': { transform: 'scale(1.1)' }, 
                transition: 'all 0.3s ease' 
              }}
              onClick={handleAvatarClick}
            />   
            <AddIcon
              sx={{ 
                '&:hover': { 
                  color: 'white', 
                  cursor: 'pointer',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s ease',
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                ml: 2,
                padding: 0.5,
                fontSize: 30,
                mr: 2
              }}
            />
            <QuestionAnswerIcon
              sx={{ 
                '&:hover': { 
                  color: 'white', 
                  cursor: 'pointer',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s ease',
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                fontSize: 30,
                padding: 0.5,
                ml: 2,
                mr: 2
              }}
            />
            <NotificationsIcon
              sx={{ 
                '&:hover': { 
                  color: 'white', 
                  cursor: 'pointer',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s ease',
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                fontSize: 30,
                padding: 0.5,
                ml: 2,
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Avatar Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Help</ListItemText>
        </MenuItem>
        <MenuItem onClick={toggleDarkMode}>
          <ListItemIcon>
            {darkMode ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
          </ListItemIcon>
          <ListItemText>Dark Mode</ListItemText>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" color="error" />
          </ListItemIcon>
          <ListItemText sx={{ color: 'error.main' }}>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navigationbar;