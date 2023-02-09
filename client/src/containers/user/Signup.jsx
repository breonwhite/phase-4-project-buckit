import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/user';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import mountainimage from '../../images/mountainclimbing2.jpg' 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';

const Signup = () => {
    const [ user, setUser ] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    })
    const [ errorsList, setErrorsList ] = useState();
    const { signup } = useContext(UserContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            user: {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                password: user.password,
                password_confirmation: user.password_confirmation
            }
        }
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(data => {
            if (!data.errors) {
                signup(data)
                navigate('/')
            } else {
                setUser({
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                })
                const errorsLi = data.errors.map(e => <Alert severity="error">{e}</Alert>)
                setErrorsList(errorsLi)
            }
        })
    }

  return (
    <Box
        style={{
        backgroundImage: `url(${mountainimage})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"
        }}>
        <Grid 
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh', width: '50%', margin: 'auto' }}
            >
            <Grid item xs={3}>
                <Typography variant="h2" gutterBottom>
                    Start living/
                </Typography>
                <form onSubmit={ handleSubmit }>
                    <Card sx={{ width: '100%', padding: '10px' }} elevation={24}>
                        <FormControl fullWidth sx={{ width: '100%', mt: 1, mr: 1 }}>
                            <Stack direction="row" spacing={2}>
                                <TextField
                                    sx={{ width: '100%' }}
                                    name="first_name"
                                    label="First Name"
                                    onChange={handleChange}
                                    value={user.first_name}
                                />
                                <TextField
                                    sx={{ width: '100%' }}
                                    name="last_name"
                                    label="Last Name"
                                    onChange={handleChange}
                                    value={user.last_name}
                                />
                            </Stack>
                        </FormControl>
                        <FormControl fullWidth sx={{ width: '100%', mt: 1, mr: 1 }}>
                            <TextField
                                fullWidth
                                name="email"
                                type="email"
                                label="Email Address"
                                onChange={handleChange}
                                value={user.email}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ width: '100%', mt: 1, mr: 1 }}>
                            <TextField
                                fullWidth
                                required
                                name="password"
                                type="password"
                                label="Password"
                                autoComplete="off"
                                onChange={handleChange}
                                value={user.password}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ width: '100%', mt: 1, mr: 1 }}>
                            <TextField
                                fullWidth
                                required
                                name="password_confirmation"
                                type="password"
                                label="Password Confirmation"
                                autoComplete="off"
                                onChange={handleChange}
                                value={user.password_confirmation}
                            /> 
                        </FormControl>
                        { errorsList ? 
                            <FormControl fullWidth sx={{ width: '100%', mt: 1, mr: 1 }}>
                                <Stack sx={{ width: '100%' }} spacing={1}>
                                    {errorsList}
                                </Stack>
                            </FormControl> :
                            <FormControl fullWidth sx={{ width: '100%', mt: 2, mr: 1 }} align="center">
                                <Typography variant="caption" display="block" gutterBottom>
                                    Already have an account? <Link exact="true" to="/login">Login here.</Link>
                                </Typography>
                            </FormControl>
                        } 
                    </Card>
                    <br/>
                    <Button 
                        variant="contained" 
                        type="submit" 
                        size="large" 
                        style={{
                            borderRadius: 35,
                            backgroundColor: "#212121",
                            padding: "18px 36px",
                            fontSize: "18px"
                        }}>
                        Create your account
                    </Button>
                </form>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Signup