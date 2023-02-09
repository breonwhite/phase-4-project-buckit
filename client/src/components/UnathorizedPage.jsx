import React from 'react'
import rockclimbingimage from '../images/rockclimbing.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const Div = styled('div')(({ theme }) => ({
    ...theme.typography.h3,
    backgroundColor: 'backdropBackground',
    padding: theme.spacing(1),
  }));

const UnathorizedPage = () => {
  return (
    <Box
      style={{
      backgroundImage: `url(${rockclimbingimage})`,
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5"
    }}>
      <Grid 
        container
        direction="column"
        justify="left"
        alignItems="left"
        spacing={2}
        style={{ minHeight: '100vh', width: '100%', margin: 'auto' }}
      >
        <Grid item xs={3} >
          <Div align="left">{"Unathorized/ please sign into your account"}</Div>
        </Grid>
        <Grid item xs={3} align="left">
          <br />
          <Button variant="contained" href="/login" size="large"
                    style={{
                        borderRadius: 35,
                        backgroundColor: "#039be5",
                        padding: "18px 36px",
                        fontSize: "18px",
                        align: "center"
                    }}>
                    ACCESS MY ACCOUNT
                </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UnathorizedPage