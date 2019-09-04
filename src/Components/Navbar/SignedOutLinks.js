import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { SIGN_IN, SIGN_UP } from '../../Constants/routes'

const SignedOutLinks = ({ toggleActiveClass }) => {
  return (
    <ul className="right">
      <li>
        <Link to={SIGN_UP} onClick={toggleActiveClass}>
          Sign Up
        </Link>
      </li>
      <li>
        <Link to={SIGN_IN} onClick={toggleActiveClass}>
          Log In
        </Link>
      </li>
    </ul>
  )
}

SignedOutLinks.propTypes = {
  toggleActiveClass: PropTypes.func.isRequired,
}

export default SignedOutLinks
