import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../context/user';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
    const { user, logout, loggedIn } = useContext(UserContext);

    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json' }
        })
        .then(() => {
            logout()
        })
    }

    if(loggedIn) {
        return (
            <Box sx={{ flexGrow: 1 }} style={{ margin: 0 }}>
                <AppBar position="static" style={{ margin: 0, background: '#212121' }} >
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            BUCKIT  /manage your adventure.
                        </Typography>
                        <Button color="inherit" component={ NavLink } exact="true" to="/">Home</Button>
                        <Button color="inherit" component={ NavLink } exact="true" to="/items">My Bucket List</Button>
                        <Button color="inherit" onClick={logoutUser}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        )} else {
        return (
            <Box sx={{ flexGrow: 1 }} style={{ margin: 0 }}>
                <AppBar position="static" style={{ margin: 0, background: '#212121' }}>
                    <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                        BUCKIT  /manage your adventure.
                    </Typography>
                    <Button color="inherit" component={ NavLink } exact="true" to="/signup">Register</Button>
                    <Button color="inherit" component={ NavLink } exact="true" to="/login">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}

export default Navbar
