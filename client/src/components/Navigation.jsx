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

    </div>
  )
}

export default Navigation