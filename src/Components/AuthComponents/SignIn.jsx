import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../Store/Actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.signIn(this.state)
  }

  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to="/dashboard" />
    return (
      <div className="container">
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <h1>Sign In</h1>
            <div className="input-group">
              <input
                type="email"
                id="email"
                onChange={this.handleChange}
                required="required"
              />
              <span>Email</span>
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
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
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
