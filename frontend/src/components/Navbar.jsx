import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:'purple'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Employee Dashboard
          </Typography>
          <Button color="inherit"><Link style={{color:'white', textDecoration:'none'}} to={'/employee'}>Employee</Link></Button>
          <Button color="inherit"><Link style={{color:'white', textDecoration:'none'}}to={'/addemployee'}>Add Employee</Link></Button>
          <Button color="inherit"><Link style={{color:'white', textDecoration:'none'}}to={'/'}>Logout</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

