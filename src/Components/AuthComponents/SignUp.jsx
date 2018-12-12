import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../Store/Actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  render() {
    const { auth, authError } = this.props
    if (auth.uid) return <Redirect to="/dashboard" />
    return <div className="container">
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <div className="input-group">
              <input type="email" id="email" onChange={this.handleChange} required="required" />
              <span>Email</span>
            </div>
            <div className="input-group">
              <input type="password" id="password" onChange={this.handleChange} required="required" />
              <span>Password</span>
            </div>
            <div className="input-group">
              <input type="text" id="firstName" onChange={this.handleChange} required="required" />
              <span>First Name</span>
            </div>
            <div className="input-group">
              <input type="text" id="lastName" onChange={this.handleChange} required="required" />
              <span>Last Name</span>
            </div>
            <div className="input-group">
              <input type="submit" value="Submit" />
            </div>
            <div>{authError ? <p>{authError}</p> : null}</div>
          </form>
        </div>
      </div>
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)