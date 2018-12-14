import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../Store/Actions/authActions'
import { DASHBOARD } from '../../Constants/routes'

const SignedInLinks = props => {
  const { profile, toggleActiveClass, signOut } = props
  return (
    <ul>
      <li>
        <Link to="/">New Banter Topic</Link>
      </li>
      <li>
        <a
          onClick={() => {
            signOut()
            toggleActiveClass()
          }}
          href={DASHBOARD}>
          Log Out
        </a>
      </li>
      <li>
        <Link to="/" className="user-avatar">{profile.initials}</Link>
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
