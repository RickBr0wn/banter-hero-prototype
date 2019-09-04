import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../Store/Actions/authActions'

const SignUp = ({ auth, authError, onSignUp }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')

  if (auth.uid) return <Redirect to="/dashboard" />

  return (
    <div className="container">
      <div className="login">
        <form
          onSubmit={e => {
            e.preventDefault()
            onSignUp({ email, password, firstName, lastName })
          }}>
          <h1>Sign Up</h1>
          <div className="input-group">
            <input
              type="email"
              id="email"
              onChange={e => setEmail(e.target.value)}
              required="required"
            />
            <span>Email</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
              required="required"
            />
            <span>Password</span>
          </div>
          <div className="input-group">
            <input
              type="text"
              id="firstName"
              onChange={e => setFirstName(e.target.value)}
              required="required"
            />
            <span>First Name</span>
          </div>
          <div className="input-group">
            <input
              type="text"
              id="lastName"
              onChange={e => setLastName(e.target.value)}
              required="required"
            />
            <span>Last Name</span>
          </div>
          <div className="input-group">
            <input type="submit" value="Submit" />
          </div>
          <div>{authError ? <p>{authError}</p> : null}</div>
        </form>
      </div>
    </div>
  )
}

SignUp.propTypes = {
  auth: PropTypes.object,
  authError: PropTypes.object,
  onSignUp: PropTypes.func,
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: newUser => dispatch(signUp(newUser)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
