import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = props => {
  const { auth, profile } = props
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  )
  return <header>
      <Link to="/" className="logo">
        Banter Hero
      </Link>
      <nav className="active">{links}</nav>
      <div className="menu-toggle">
        <i className="fas fa-bars" />
      </div>
    </header>
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(Navbar)
