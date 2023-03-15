import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   
        <AppBar>
            <Toolbar>
            <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}></Typography>
             <Button color='inherit'><Link to="/">Login</Link></Button>
             <Button color='inherit'><Link to={"/signup"}>signup</Link></Button>
             <Button color='inherit'><Link to={"/contact"}>contact</Link></Button>
         </Toolbar>
        </AppBar>
  )
    
}
export default Navbar
