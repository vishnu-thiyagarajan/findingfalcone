import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

export default function Footer(){
    return(
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
        <Box 
          display="flex" 
          alignItems="center"
          justifyContent="center"
          sx={{ flexGrow: 1 }}
        >
            Coding Problem - <Link color="inherit" target="_blank" href="https://www.geektrust.com/coding/detailed/space">www.geektrust.com/coding/detailed/space</Link>
        </Box>
        </Toolbar>
      </AppBar>
    )
}