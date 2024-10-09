import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const PomodoroContent = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    // Cleanup the timer on unmount or when the timer stops
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography 
        variant="h1" 
        sx={{ 
          color: 'white', 
          fontFamily: 'Arial, sans-serif', // Change the font family for a smoother look
          fontWeight: 'bold', // Make the font bold for emphasis
          letterSpacing: '2px', // Add spacing between letters
          mb: 2, // Margin below the timer
        }}
      >
        {formatTime(timeLeft)}
      </Typography>
      <Button 
        variant="contained" 
        onClick={handleStartPause} 
        sx={{ 
          marginTop: 3,
          backgroundColor: '#4CAF50', // Green color for the button
          color: 'white', // White text color for better contrast
          '&:hover': {
            backgroundColor: '#45a049', // Darker green on hover
          },
          padding: '10px 20px', // Padding for the button
          borderRadius: '20px', // Rounded edges for a smoother look
          fontSize: '1.2rem', // Slightly larger font size for better visibility
        }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </Button>
    </Box>
  );
};

export default PomodoroContent;
