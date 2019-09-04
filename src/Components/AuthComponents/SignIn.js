import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signIn } from '../../Store/Actions/authActions'
import { Redirect } from 'react-router-dom'

const SignIn = ({ authError, auth, onSignIn }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  if (auth.uid) return <Redirect to="/dashboard" />

  return (
    <div data-test="sign-in-component" className="container">
      <div className="login">
        <form
          onSubmit={e => {
            e.preventDefault()
            onSignIn({ email, password })
          }}>
          <h1>Sign In</h1>
          <div className="input-group">
            <input
              data-test="sign-in-input"
              type="email"
              id="email"
              onChange={e => setEmail(e.target.value)}
              required="required"
            />
            <span>Email</span>
          </div>
          <div className="input-group">
            <input
              data-test="sign-in-input"
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
              required="required"
            />
            <span>Password</span>
          </div>
          <div className="input-group">
            <input type="submit" value="Submit" />
          </div>
          <div>
            <a href="/">
              Forgot Password <span>Click Here</span>
            </a>
            {authError ? <p style={{ color: 'red' }}>{authError}</p> : null}
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: credentials => dispatch(signIn(credentials)),
  }
}

SignIn.propTypes = {
  authError: PropTypes.string,
  auth: PropTypes.object.isRequired,
  onSignIn: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
