import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { toast } from 'react-toastify';

const AppBarMUI = () => {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // Drawer Handler
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Login Handler
  const handleLogin = () => {
    navigate('/login');
  };

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    toast('🍹 Logged out successfully');
  };

  // Close Drawer
  const handleLinkClick = (path) => {
    navigate(path);
    setIsDrawerOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <a href="/">
            <img
            className='mix-master-logo-nav'
              src="/src/assets/images/mix-master-logo.png"
              alt="logo"
            />
          </a>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Mix Masters
          </Typography>
          {isLoggedIn ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItemButton onClick={() => handleLinkClick('/')}>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={() => handleLinkClick('/show-drink-list')}>
            <ListItemText primary="Drink List" />
          </ListItemButton>
          <ListItemButton
            onClick={() => handleLinkClick('/create-drink')}
            disabled={!isLoggedIn}
          >
            <ListItemText primary="Create Drink" />
          </ListItemButton>
          <ListItemButton onClick={() => handleLinkClick('/about')}>
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton onClick={() => handleLinkClick('/contact')}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default AppBarMUI;
