import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../Constants/routes'

const SignedOutLinks = () => {
  return <ul className="right">
      <li>
        <NavLink to={routes.SIGN_UP}>Sign Up</NavLink>
      </li>
      <li>
      <NavLink to={routes.SIGN_IN}>Log In</NavLink>
      </li>
    </ul>
}

export default SignedOutLinks
