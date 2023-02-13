import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


import Container from '@mui/material/Container';
import { Typography } from '@mui/material';





function ResponsiveAppBar() {


 


  
  return (
    <AppBar position="static" Style={"background-color:#833AB4"}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          
          <Typography fontFamily={'cursive'} fontStyle={'italic'} fontSize={'20px'}>Feed Back Form</Typography>
            
            
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;