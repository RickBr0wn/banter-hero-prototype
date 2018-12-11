import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import '../../CSS/signup.css'

const Navbar = props => {
  const { auth, profile } = props
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <div>
      <nav>
        <div>
          <Link to="/">Banter Hero</Link>
          {links}
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)