import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoPNG from './Assets/Logo.png';
import SettingsCard from './SettingCard';

const Navbar = () => {
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const handleSettingsClick = () => {
    setSettingsOpen((prev) => !prev); // Toggle settings visibility
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#C9184A',
        boxShadow: '0px 2px 4px #FF4D6D',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={LogoPNG}
            alt="Logo"
            style={{ filter: 'brightness(0) invert(1)', marginRight: '8px' }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 'auto',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TIMATO
          </Typography>
          <IconButton onClick={handleSettingsClick} sx={{ p: 0 }}>
            <SettingsIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Toolbar>
        {settingsOpen && <SettingsCard />}
      </Container>
    </AppBar>
  );
};

export default Navbar;
