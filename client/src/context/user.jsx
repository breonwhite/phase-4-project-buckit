import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [ user, setUser] = useState({})
    const [ loggedIn, setLoggedIn ] = useState(false) 
    const [ items, setItems ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/me')
        .then(response => response.json())
        .then(data => {
            setUser(data)
            if (data.error) {
                console.log(data.error)
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                fetchItems()
            }
        })
    }, [])

    const fetchItems = () => {
        console.log("hitting the fetch for items")
        fetch('/items')
        .then(response => response.json())
        .then(data => {
            setItems(data)
        })
    }

    const addItem = (item) => {
        console.log(`Adding item to db: ${item}`)
        fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(response => response.json())
        .then(data => {
            setItems([...items, data])
        })
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchItems()
    }
    
    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchItems()
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
        navigate('/')
    }

  return (
    <UserContext.Provider value={{ user, signup, login, logout, loggedIn, items, addItem }}>
        { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider}