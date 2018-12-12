import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

export class Navbar extends Component {
  constructor(props) {
    super(props)
    this.toggleActiveClass = this.toggleActiveClass.bind(this)
    this.state = { isActive: false }
  }

  toggleActiveClass() {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const { auth, profile } = this.props
    const links = auth.uid ? (
      <SignedInLinks
        profile={profile}
        toggleActiveClass={this.toggleActiveClass}
      />
    ) : (
      <SignedOutLinks toggleActiveClass={this.toggleActiveClass} />
    )
    return (
      <header>
        <Link to="/" className="logo">
          Banter Hero
        </Link>
        <nav className={this.state.isActive ? 'active' : ''}>{links}</nav>
        <div onClick={this.toggleActiveClass} className="menu-toggle">
          <i className="fas fa-bars" />
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(Navbar)
