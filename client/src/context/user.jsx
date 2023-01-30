import React, { useState, useEffect } from 'react'

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [ user, setUser] = useState(null)

    useEffect(() => {
        fetch('/me')
        .then(response => response.json())
        .then(data => {
            setUser(data)
        })
    }, [])

    const signup = (user) => {
        setUser(user)
    }
    
    const login = () => {

    }

    const logout = () => {

    }

  return (
    <UserContext.Provider value={{ user, signup, login, logout }}>
        { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider}