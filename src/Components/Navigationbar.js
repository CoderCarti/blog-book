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
  Switch,
  IconButton,
  useMediaQuery,
  useTheme as useMuiTheme
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
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '../Theme/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Navigationbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileSearch, setMobileSearch] = useState(false);
  const open = Boolean(anchorEl);
  const { darkMode, toggleDarkMode } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));
  const navigate = useNavigate();

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchToggle = () => {
    setMobileSearch(!mobileSearch);
  };

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/');
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
        <Toolbar sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          py: isMobile ? 1 : 0
        }}>
          {/* Logo/Brand */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            order: isMobile ? 1 : 0,
            flexGrow: isMobile ? 1 : 0
          }}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold', 
              color: 'primary.main',
              fontSize: isMobile ? '1.25rem' : '1.5rem'
            }}>
              BlogSocial
            </Typography>
          </Box>

          {/* Search Bar - Desktop/Tablet */}
          {!isMobile && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              flexGrow: isTablet ? 1 : 0,
              mx: isTablet ? 2 : 0,
              order: isMobile ? 3 : 0,
              width: isMobile ? '100%' : 'auto',
              mt: isMobile ? 1 : 0
            }}>
              <TextField
                size="small"
                placeholder="Search..."
                variant="outlined"
                sx={{ 
                  mr: 2, 
                  width: isTablet ? '100%' : 300 
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          )}

          {/* Mobile Search Toggle */}
          {isMobile && !mobileSearch && (
            <IconButton
              onClick={handleSearchToggle}
              sx={{ order: 2 }}
            >
              <SearchIcon />
            </IconButton>
          )}

          {/* Mobile Search Field */}
          {isMobile && mobileSearch && (
            <Box sx={{ 
              order: 3,
              width: '100%',
              mt: 1
            }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search..."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSearchToggle}>
                        <Typography variant="body2" color="textSecondary">
                          Cancel
                        </Typography>
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
          )}

          {/* Action Icons */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            order: isMobile ? 2 : 0
          }}>
            {!isMobile && (
              <>
                <IconButton
                  sx={{ 
                    color: 'primary.main',
                    '&:hover': { 
                      backgroundColor: 'primary.main',
                      color: 'white'
                    },
                    mr: 1
                  }}
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  sx={{ 
                    color: 'primary.main',
                    '&:hover': { 
                      backgroundColor: 'primary.main',
                      color: 'white'
                    },
                    mr: 1
                  }}
                >
                  <QuestionAnswerIcon />
                </IconButton>
                <IconButton
                  sx={{ 
                    color: 'primary.main',
                    '&:hover': { 
                      backgroundColor: 'primary.main',
                      color: 'white'
                    },
                    mr: 1
                  }}
                >
                  <NotificationsIcon />
                </IconButton>
              </>
            )}

            <Avatar
              alt="User Avatar"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              sx={{ 
                width: 40, 
                height: 40, 
                cursor: 'pointer', 
                '&:hover': { transform: 'scale(1.1)' }, 
                transition: 'all 0.3s ease',
                ml: isMobile ? 1 : 0
              }}
              onClick={handleAvatarClick}
            />

            {isMobile && (
              <IconButton
                sx={{ ml: 1 }}
                onClick={handleAvatarClick}
              >
                <MenuIcon />
              </IconButton>
            )}
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
        {isMobile && (
          <>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AddIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Create</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <QuestionAnswerIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Messages</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <NotificationsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Notifications</ListItemText>
            </MenuItem>
          </>
        )}
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
        <MenuItem onClick={handleClose} onClickCapture={handleLogout}>
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