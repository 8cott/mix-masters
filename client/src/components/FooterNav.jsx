import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function StickyFooter() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Container maxWidth="sm">
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Link href="/" sx={{ textDecoration: 'none' }}>
                  <img
                    className="mix-master-logo"
                    src="/src/assets/images/mix-master-logo.png"
                    alt="logo"
                  />
                </Link>
              </Box>
              <Box>
                <nav sx={{ display: 'flex' }}>
                  <ul
                    aria-label="Footer"
                    role="list"
                    style={{ display: 'flex' }}
                  >
                    <li>
                      <Link href="/" sx={{ textDecoration: 'none' }}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="show-drink-list"
                        sx={{ textDecoration: 'none' }}
                      >
                        Drinks
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" sx={{ textDecoration: 'none' }}>
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </Box>
              <Box sx={{ marginLeft: 'auto' }}>
                {' '}
                {/* Add marginLeft: 'auto' to move the form to the right */}
                <form action="">
                  <Typography>
                    Get our best cocktail recipes, tips, and more when you sign
                    up for our newsletter.
                  </Typography>
                  <input type="email" />
                  <button>Sign Up</button>
                  <Typography variant="body2" color="textSecondary">
                    Copyright 2023. All Rights Reserved
                  </Typography>
                </form>
              </Box>
            </Box>
          </Container>
        </Box>
    </Box>
    </ThemeProvider>
  );
}

export default StickyFooter;
