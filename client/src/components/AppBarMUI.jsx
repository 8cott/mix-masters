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
import { Link } from '@mui/material';
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
    toast.success('Logged out successfully', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  // Close Drawer
  const handleLinkClick = (path) => {
    navigate(path);
    setIsDrawerOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href='/' color='inherit' underline='none'>
              Mix Masters
            </Link>
          </Typography>
          {isLoggedIn ? (
            <Button color='inherit' onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color='inherit' onClick={handleLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={isDrawerOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItemButton
            component='a'
            href='/'
            onClick={() => handleLinkClick('/')}
          >
            <ListItemText primary='Home' />
          </ListItemButton>
          <ListItemButton
            component='a'
            href='/show-drink-list'
            onClick={() => handleLinkClick('/show-drink-list')}
          >
            <ListItemText primary='Drink List' />
          </ListItemButton>
          <ListItemButton
            component='a'
            href='/create-drink'
            onClick={() => handleLinkClick('/create-drink')}
            disabled={!isLoggedIn} // Add disabled attribute
          >
            <ListItemText primary='Create Drink' />
          </ListItemButton>
          <ListItemButton
            component='a'
            href='/about'
            onClick={() => handleLinkClick('/about')}
          >
            <ListItemText primary='About' />
          </ListItemButton>
          <ListItemButton
            component='a'
            href='/contact'
            onClick={() => handleLinkClick('/contact')}
          >
            <ListItemText primary='Contact' />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default AppBarMUI;
