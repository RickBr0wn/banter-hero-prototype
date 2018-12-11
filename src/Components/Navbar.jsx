import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../Constants/routes'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="link-container">
        <ul>
          <li>
            <Link to={routes.DASHBOARD}>Dashboard</Link>
          </li>
          <li>
            <Link to={routes.SIGN_UP_PAGE}>Sign Up</Link>
          </li>
          <li>
            <Link to={routes.SIGN_IN_PAGE}>Log In</Link>
          </li>
          <li>
            <Link to={routes.SECRET_PAGE}>Secret Page</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
