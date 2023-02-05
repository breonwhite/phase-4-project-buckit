import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/user';
import { useNavigate } from "react-router-dom";
import scubaimage from '../../images/scubadiving2.jpg' 
import Box from '@mui/material/Box';

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



const Login = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errorsList, setErrorsList ] = useState();
    const {login} = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => {
            if (response.ok) {
                response.json()
                .then(user => {
                    login(user)
                    navigate('/')
                })
            } else {
                response.json()
                .then(json => {
                    const errLi = <Alert severity="error">{json.error}</Alert>
                    setErrorsList(errLi)
                })
            }
        })
    }
  
    return (
        <Box
            style={{
            backgroundImage: `url(${scubaimage})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5"
            }}>
            <Grid 
                container
                direction="column"
                justify="center"
                spacing={2}
                style={{ minHeight: '100vh', width: '50%', margin: 'auto' }}
            >
                <Grid item xs={3}>
                <Typography variant="h2" gutterBottom>
                    Welcome back /
                </Typography>
                <form onSubmit={ handleSubmit }>
                <Card sx={{ width: '100%', padding: '10px' }} elevation={24}>
                    <FormControl fullWidth sx={{ width: '100%', mt: 1, mr: 1 }}>
                        <Stack direction="column" spacing={2}>
                            <TextField
                                sx={{ width: '100%' }}
                                type="email"
                                name="email"
                                label="Email Adress"
                                value={email}
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                sx={{ width: '100%' }}
                                type="password"
                                name="password"
                                label="Password"
                                value={password}
                                autoComplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Stack>
                    </FormControl>
                    <FormControl fullWidth sx={{ width: '100%', mt: 1, mr: 1 }}>
                        <Stack sx={{ width: '100%' }} spacing={1}>
                            { errorsList }
                        </Stack>
                    </FormControl>
                </Card><br />
                <Button variant="contained" type="submit" size="large" 
                    style={{
                        borderRadius: 35,
                        backgroundColor: "#212121",
                        padding: "18px 36px",
                        fontSize: "18px"
                    }}>
                    Log into your account
                </Button>
                </form>
                </Grid>
            </Grid> 
        </Box>
  )
}

export default Login