import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../context/user';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const { user, logout, loggedIn } = useContext(UserContext)
const navigate = useNavigate();

const logoutUser = () => {
    fetch('/logout', {
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json' }
    })
    .then(() => {
        logout()
        navigate('/login')
    })
}

  if(loggedIn) {
    return (
    <div>
      <NavLink
        to="/"
        exact="true"
      >
        Home
      </NavLink>
      <br />
      <NavLink
        to="/items"
        exact="true"
      >
        My BucketList
      </NavLink>
      <br />
      <NavLink
        to="/users"
        exact="true"
      >
        My Profile
      </NavLink>
      <br />
      <button onClick={logoutUser}>Logout</button>
    </div>
  )} else {
    return (
        <div>
           <NavLink
            to="/login"
            exact="true"
            ><button>Login</button>
            </NavLink> 
            <NavLink
            to="/signup"
            exact="true"
            ><button>Register</button>
            </NavLink> 
        </div>
    )
  }
}

export default Navbar