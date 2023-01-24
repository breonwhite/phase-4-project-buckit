import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
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
    </div>
  )
}

export default Navigation 