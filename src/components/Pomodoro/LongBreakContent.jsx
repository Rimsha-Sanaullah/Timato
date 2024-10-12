import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const LongBreakContent = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); 
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setMessage("Awesome! You've earned that long break. Time to refocus and crush your next task! 💪");
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
    if (timeLeft === 0) {
      setTimeLeft(15 * 60); 
      setMessage('');
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      {timeLeft > 0 ? (
        <Typography 
          variant="h1" 
          sx={{ 
            color: 'white', 
            fontFamily: 'Hepta Slab', 
            fontWeight: 'bold', 
            letterSpacing: '2px', 
            mb: 2, 
          }}
        >
          {formatTime(timeLeft)}
        </Typography>
      ) : (
        <Typography 
          variant="h4" 
          sx={{ 
            color: '#4CAF50', 
            fontFamily: 'Hepta Slab', 
            fontWeight: 'bold', 
            letterSpacing: '1px', 
            mb: 2, 
          }}
        >
          {message}
        </Typography>
      )}
      <Button 
        variant="contained" 
        onClick={handleStartPause} 
        sx={{ 
          marginTop: 3,
          backgroundColor: 'white', 
          color: '#4CAF50', 
          padding: '12px 24px', 
          borderRadius: '30px', 
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
          transition: 'all 0.3s ease-in-out', 
          '&:hover': {
            backgroundColor: '#f9f9f9', 
            color: '#45a049', 
            transform: 'translateY(-2px)', 
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)', 
          },
          '&:active': {
            transform: 'translateY(0)', 
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
          },
          fontFamily: 'Hepta Slab',
        }}
      >
        {isRunning ? 'Pause' : timeLeft === 0 ? 'Restart' : 'Start'}
      </Button>
    </Box>
  );
};

export default LongBreakContent;
