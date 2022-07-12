import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const NavBar = ({reset}) => {
  return (
    <AppBar position="static">
      <CssBaseline/>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1}}>
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                color: 'inherit',
              }}
            >
              FINDING FALCONE
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Reset">
              <IconButton onClick={reset}>
                <RestartAltIcon/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
