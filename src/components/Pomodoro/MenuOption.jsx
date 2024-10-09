// MenuOption.jsx
import React from 'react';
import { Typography } from '@mui/material';

const MenuOption = ({ label, onClick, selected }) => {
  return (
    <Typography
      variant="body1"
      color="white"
      onClick={onClick}
      sx={{
        backgroundColor: selected ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)', // Darker background if selected
        borderRadius: 2,
        padding: '9px 11px', // Adjust padding for better click area
        textAlign: 'center',
        cursor: 'pointer',
        flexGrow: 1, // Allow the option to grow and fill space equally
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Change on hover
        },
      }}
    >
      {label}
    </Typography>
  );
};

export default MenuOption;
