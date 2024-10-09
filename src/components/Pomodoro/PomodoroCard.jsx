import { Stack, Box } from '@mui/material';
import React, { useState } from 'react';
import MenuOption from './MenuOption';
import PomodoroContent from './PomodoroContent';
import ShortBreakContent from './ShortBreakContent';
import LongBreakContent from './LongBreakContent';

const PomodoroCard = () => {
  const [selectedOption, setSelectedOption] = useState('Pomodoro Card');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Pomodoro Card':
        return <PomodoroContent />;
      case 'Short Break':
        return <ShortBreakContent />;
      case 'Long Break':
        return <LongBreakContent />;
      default:
        return null;
    }
  };

  return (
    <Stack
      sx={{
        minHeight: '100vh', 
        backgroundColor: '#C9184A',
        justifyContent: 'center', 
        alignItems: 'center',    
        p: 2                     
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Stack the content vertically
          gap: 2,
          width: '80%',           // Cover 80% of the screen
          maxWidth: 900,         // Maximum width
          backgroundColor: '#FF4D6D',
          padding: 2,            // Add padding
          borderRadius: 3,
        }}
      >
        {/* Menu Options in a row */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 3 }}>
          <MenuOption label="Pomodoro Card" onClick={() => handleOptionClick('Pomodoro Card')} selected={selectedOption === 'Pomodoro Card'} />
          <MenuOption label="Short Break" onClick={() => handleOptionClick('Short Break')} selected={selectedOption === 'Short Break'} />
          <MenuOption label="Long Break" onClick={() => handleOptionClick('Long Break')} selected={selectedOption === 'Long Break'} />
        </Box>
        
        {/* Content based on selected option */}
        <Box sx={{ color: 'white', textAlign: 'center', mt: 2 }}>
          <h3>{selectedOption}</h3>
          {renderContent()}
        </Box>
      </Box>
    </Stack>
  );
};

export default PomodoroCard;
