import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../Store/Actions/authActions'

const SignedInLinks = props => {
  console.log(props);
  return (
    <ul>
      <li>
        <NavLink to="/">New Banter</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/">{props.profile.initials}</NavLink>
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
