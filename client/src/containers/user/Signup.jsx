import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/user';
import { useNavigate } from "react-router-dom";

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
        console.log(user)
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
                const errorsLi = data.errors.map(e => <li key={e}>{e}</li>)
                setErrorsList(errorsLi)
            }
        })
    }

  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input 
            type="text"
            name="first_name"
            onChange={handleChange}
            value={user.first_name}
            />
            <br />
            <label>Last Name:</label>
            <input 
            type="text"
            name="last_name"
            onChange={handleChange}
            value={user.last_name}
            />
            <br />
            <label>Email</label>
            <input 
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
            />
            <br />
            <label>Password:</label>
            <input 
            type="password"
            name="password"
            autoComplete="on"
            onChange={handleChange}
            value={user.password}
            />
            <br />
            <label>Confirm Password:</label>
            <input 
            type="password"
            name="password_confirmation"
            autoComplete="on"
            onChange={handleChange}
            value={user.password_confirmation}
            />
            <br />
            <input type="submit"/>
        </form>
        <ul>
            {errorsList}
        </ul>
    </div>
  )
}

export default Signup