import React, { useContext } from 'react'
import { UserContext } from '../context/user'

const Home = () => {
  const { user } = useContext(UserContext)
  
  // if there is no user or if there is an error
  if (!user || user.error) {
    return (
      <h1>Please Login or Signup</h1>
    )
  } else
  return (
    <div>
        <h1>Home</h1><br/>
        <h1>Hi, { user.first_name}! Welcome to your account</h1>
    </div>
  )
}

export default Home