import React, { useState, useEffect } from 'react'

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [ user, setUser] = useState({})
    const [ loggedIn, setLoggedIn ] = useState(false) 

    useEffect(() => {
        fetch('/me')
        .then(response => response.json())
        .then(data => {
            setUser(data)
            data.error ? setLoggedIn(false) : setLoggedIn(true)
        })
    }, [])

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }
    
    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

  return (
    <UserContext.Provider value={{ user, signup, login, logout, loggedIn }}>
        { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider}