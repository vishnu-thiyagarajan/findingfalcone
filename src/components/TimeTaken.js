import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';

export default function TimeTaken({time}) {
  return (
    <Card sx={{ p: 3, height: "100%" }}>
      <CardContent>
        <Box 
          display="flex" 
          alignItems="center"
          justifyContent="center"
        >
          <h1>Time Taken</h1>
        </Box>
        <Box 
          display="flex" 
          alignItems="center"
          justifyContent="center"
          sx={{ fontSize: 80 }}
        >
          {time}
        </Box>
      </CardContent>
    </Card>
  );
}
