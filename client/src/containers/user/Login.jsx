import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/user';
import { useNavigate } from "react-router-dom";

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
                .then(json => setErrorsList(json.error))
            }
        })
    }
  
    return (
        <div>
            <h1>Login to Your Account</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit"/>
            </form>
                <ul>
                    {errorsList}
                </ul>
        </div>
  )
}

export default Login