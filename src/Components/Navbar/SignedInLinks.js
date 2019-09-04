import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../Store/Actions/authActions'
import { DASHBOARD, CREATE_PROJECT } from '../../Constants/routes'

const SignedInLinks = ({ profile, toggleActiveClass, onSignOut }) => {
  return (
    <ul>
      <li>
        <Link to={DASHBOARD} onClick={toggleActiveClass}>
          Banter Dashboard
        </Link>
      </li>
      <li>
        <Link to={CREATE_PROJECT} onClick={toggleActiveClass}>
          New Banter Topic
        </Link>
      </li>
      <li>
        <a
          onClick={() => {
            onSignOut()
            toggleActiveClass()
          }}
          href={DASHBOARD}>
          Log Out
        </a>
      </li>
      <li>
        <Link to="/" className="user-avatar">
          {profile.initials}
        </Link>
      </li>
    </ul>
  )
}

SignedInLinks.propTypes = {
  profile: PropTypes.object,
  toggleActiveClass: PropTypes.func,
  onSignOut: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(signOut()),
  }
}
export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks)
