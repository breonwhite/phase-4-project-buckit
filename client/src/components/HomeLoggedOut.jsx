import React, { useContext } from 'react'
import skydivingimage from '../images/skydiving5.jpg'

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//style layout for header on home page
const Div = styled('div')(({ theme }) => ({
    ...theme.typography.h1,
    backgroundColor: 'backdropBackground',
    padding: theme.spacing(1),
}));

const HomeLoggedOut = () => {

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

export default HomeLoggedOut