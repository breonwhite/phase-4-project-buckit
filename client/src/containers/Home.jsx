import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import HomeLoggedIn from '../components/HomeLoggedIn';
import HomeLoggedOut from '../components/HomeLoggedOut';

const Home = () => {
  const { loggedIn } = useContext(UserContext);
  
  if (loggedIn) { // if there is no user or if there is an error
    return (
      <HomeLoggedIn />
    )
  } else
  return (
    <HomeLoggedOut />
  )
}

export default Home
