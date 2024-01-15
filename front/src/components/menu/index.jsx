  import * as React from 'react';
  import AppBar from '@mui/material/AppBar';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import Container from '@mui/material/Container';
  import NightsStayIcon from '@mui/icons-material/NightsStay';
  import Link from '@mui/material/Link';


 
  const MenuBar = ({setOpen, weatherData}) => {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NightsStayIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              WEATHER
            </Typography>
            <Link
              component="button"
              variant="body2"
              sx={{
                ml: 5,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'underline',
                alignSelf: 'center'
              }}
              onClick={setOpen}
            >
              {weatherData?.streetName? `${weatherData?.streetName}, ${weatherData?.city} - ${weatherData?.state}` : 'Click here to select address'}
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
  export default MenuBar;