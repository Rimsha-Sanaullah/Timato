import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, TextField, Box, Divider } from '@mui/material';
import { hover } from '@testing-library/user-event/dist/hover';

const SettingsCard = () => {
  return (
    <Card
      sx={{
        width: { xs: '90%', sm: 500 }, // Responsive width
        maxWidth: 500,
        p: 2,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ color: '#C9184A', fontWeight: 'bold' }} gutterBottom>
          Settings
        </Typography>
        
        <Divider sx={{ my: 2, bgcolor: '#FF4D6D' }} /> {/* Styled Divider */}
        
        <Typography variant="body1" gutterBottom>Time (minutes)</Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ minWidth: '100px' }}>Pomodoro</Typography>
            <TextField 
              type="number"
              defaultValue="25"
              inputProps={{ min: 1, max: 60 }}
              size="small"
              sx={{ width: '100px' }}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ minWidth: '100px' }}>Short Break</Typography>
            <TextField 
              type="number"
              defaultValue="5"
              inputProps={{ min: 1, max: 15 }}
              size="small"
              sx={{ width: '100px' }}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ minWidth: '100px' }}>Long Break</Typography>
            <TextField 
              type="number"
              defaultValue="15"
              inputProps={{ min: 1, max: 30 }}
              size="small"
              sx={{ width: '100px' }}
            />
          </Box>
        </Box>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" sx={{ backgroundColor: '#C9184A', paddingX: '80px', '&hover': {backgroundColor: '#800F2F'
          } }}>Save</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SettingsCard;
