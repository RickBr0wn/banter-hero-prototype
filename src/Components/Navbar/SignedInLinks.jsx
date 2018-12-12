import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../Store/Actions/authActions'
import * as routes from '../../Constants/routes'

const SignedInLinks = props => {
  const { profile, toggleActiveClass, signOut } = props
  return (
    <ul>
      <li>
        <Link to="/">New Banter Topic</Link>
      </li>
      <li>
        <a onClick={() => {
          signOut()
          toggleActiveClass()
        }}>Log Out</a>
      </li>
      <li>
        <Link to="/">{profile.initials}</Link>
      </li>
    </ul>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks)
