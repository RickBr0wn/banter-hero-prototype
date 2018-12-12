import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../Constants/routes'

const SignedOutLinks = props => {
  const { toggleActiveClass } = props
  return <ul className="right">
      <li>
        <Link to={routes.SIGN_UP} onClick={toggleActiveClass}>Sign Up</Link>
      </li>
      <li>
      <Link to={routes.SIGN_IN} onClick={toggleActiveClass}>Log In</Link>
      </li>
    </ul>
}

export default SignedOutLinks
