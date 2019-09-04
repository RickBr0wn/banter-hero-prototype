import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = ({ auth, profile }) => {
  const [isActive, setIsActive] = React.useState(false)

  const links = auth.uid ? (
    <SignedInLinks
      profile={profile}
      toggleActiveClass={() => setIsActive(!isActive)}
    />
  ) : (
    <SignedOutLinks toggleActiveClass={() => setIsActive(!isActive)} />
  )
  return (
    <header>
      <Link to="/" className="logo">
        Banter Hero
      </Link>
      <nav className={isActive ? 'active' : ''}>{links}</nav>
      <div onClick={() => setIsActive(!isActive)} className="menu-toggle">
        <i className="fas fa-bars" />
      </div>
    </header>
  )
}

Navbar.propTypes = {
  auth: PropTypes.object,
  profile: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(Navbar)
