import React from 'react';
import { Typography } from '@mui/material';

const MenuOption = ({ label, onClick, selected }) => {
  return (
    <Typography
      variant="body1"
      color="white"
      onClick={onClick}
      sx={{
        backgroundColor: selected ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)', 
        borderRadius: 2,
        padding: {
          xs: '10px 12px',  
          sm: '8px 10px',  
          md: '9px 11px',   
        },
        textAlign: 'center',
        cursor: 'pointer',
        flexGrow: 1, 
        '&:hover': {
          backgroundColor: { xs: 'rgba(255, 255, 255, 0.3)', md: 'rgba(255, 255, 255, 0.5)' },
        },
        fontFamily: 'Hepta Slab',
        fontSize: {
          xs: '1rem',  
          md: '1.2rem',
        },
      }}
    >
      {label}
    </Typography>
  );
};

export default MenuOption;
