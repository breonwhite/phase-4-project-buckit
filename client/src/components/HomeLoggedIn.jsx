import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import sky1 from '../images/sky1.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.h3,
    backgroundColor: 'backdropBackground',
    padding: theme.spacing(1),
}));

const HomeLoggedIn = () => {
    const { user, items } = useContext(UserContext)

  return (
    <Box
      style={{
      backgroundImage: `url(${sky1})`,
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5"
    }}>
        <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            style={{ minHeight: '100vh', width: '100%', margin: 'auto' }}
        >
            <Grid item xs={3} >
                <Div align="center">{`Hi, ${ user.first_name }! Welcome to to your account`}</Div>
            </Grid>
            <Grid item xs={3} >
                <Div align="center">{`You currently have [ ${ items.length } ] items on your bucket list `}</Div>
            </Grid>
            <Grid item xs={3} align="left">
                <br />
                <Button variant="contained" href="/items" size="large"
                    style={{
                        borderRadius: 35,
                        backgroundColor: "#212121",
                        padding: "18px 36px",
                        fontSize: "18px",
                        align: "center"
                    }}>
                    Add to your bucket list
                </Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default HomeLoggedIn