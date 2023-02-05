import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import Navbar from './user/Navbar'
import skydivingimage from '../images/skydiving5.jpg' 
import Box from '@mui/material/Box';
import Test from '../images/Test';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';


import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Container } from '@mui/material';

//style layout for header on home page
const Div = styled('div')(({ theme }) => ({
  ...theme.typography.h1,
  backgroundColor: 'backdropBackground',
  padding: theme.spacing(1),
}));

const Home = () => {
  const { user, items, loggedIn } = useContext(UserContext)
  
  // if there is no user or if there is an error
  if (loggedIn) {
    return (
      <div>
        <h1>Home</h1><br/>
        <h1>Hi, { user.first_name}! Welcome to your account</h1>
        <h1>{items.length}</h1>
    </div>
    )
  } else
  return (
    <Box
      style={{
      backgroundImage: `url(${skydivingimage})`,
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5"
    }}>
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
        style={{ minHeight: '100vh', width: '50%', margin: 'auto' }}
      >
        <Grid item xs={3} >
          <Div align="center">{"Your adventure is waiting on you/"}</Div>
        </Grid>
        <Grid item xs={3} align="center">
          <br />
          <Button variant="contained" href="/signup" size="large"
                    style={{
                        borderRadius: 35,
                        backgroundColor: "#039be5",
                        padding: "18px 36px",
                        fontSize: "18px",
                        align: "center"
                    }}>
                    GET STARTED
                </Button>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default Home